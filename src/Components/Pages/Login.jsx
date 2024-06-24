import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate=useNavigate();
  const [formData, setFormData] = useState({

    title: "",
    description: "",
    price:"",
    thumbnail: "",
  });

  const handleThumbnail = (ev) => {
    if (ev.target.files) {
      setFormData({
        ...formData,
        thumbnail: ev.target.files[0],
      });
    }
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const onFormSubmit = (ev) => {
    
   
    // ev.preventDefault();
    if (
      formData.title &&
      formData.description &&
      formData.price &&
      formData.thumbnail
    ) {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("price", formData.price);
      form.append("thumbnail", formData.thumbnail);

      fetch("http://localhost:4001/category", {
        method: "POST",
        body: form,
      })
        .then((res) => res.json())
        .then((data) => {
          setFormData(data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigate("/Product");
  };
  return (
    <div>
      <div className="cat-form">
        <form action="" onSubmit={onFormSubmit} >
          <div>
            <label htmlFor="">title</label>
            <input type="text" name="title" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input
              type="text"
              name="description"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="">Thumbnail</label>
            <input type="file" name="thumbnail" onChange={handleThumbnail} />
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
