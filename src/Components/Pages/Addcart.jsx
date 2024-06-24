import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Addcart = () => {
  const {setAuthenticate} = useAuth();
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...form,
      [name]: value,
    });
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    debugger;
    console.log(form);
    if (form.email && form.password) {
      fetch("http://localhost:4001/login", {
        method: "POST",
        body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log(data);
           setAuthenticate(true);
            navigate("/product");
          } else {
            alert(data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  //   const onFormSubmit =(ev)=>{
  // ev.preventDefault();
  // //alert(form.email+form.password);
  //     if(form.email && form.password){
  //        fetch("http://localhost:4001/login", {
  //          method: "POST",
  //          body: form,
  //        })
  //          .then((res) => res.json())
  //          .then((data) => {
  //   //        alert('Valid User');
  //   alert(data.message);
  //             if(data=="Invalid email" || data=="Invalid Password")
  //               console.log(data.message)
  //             else
  //            navigate("/product");
  //          })
  //          .catch((error) => {
  //           alert("InValid User");

  //           console.log(error);
  //          });
  //     }
  //   }

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={ onFormSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(ev) => handleChange(ev)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(ev) => handleChange(ev)}
          />
        </div>

        <button type="submit" className="form-button" value="Save">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addcart;
