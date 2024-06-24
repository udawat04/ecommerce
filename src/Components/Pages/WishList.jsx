import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",

  });

  const [formErrors,setFormErrors] = useState({});
  const [formSuccess,setFormSuccess] = useState("");

  const handleChange = (ev)=>{
    const {name,value} = ev.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  const validate =()=>{
    const errors = {};
    if(!formData.name) errors.name ="Name is Required";
    if(!formData.email){
      errors.email = "email is required";

    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email="email address is invalid"
    }
    if (!formData.password) {
      errors.password = "password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 character";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must be at least one uppercase character";
    }
    else if(!/[!@#$%^&*(),.?":{|<>}]/.test(formData.password)){
      errors.password = "Password must be at least one special character";
    }
    // console.log(errors,"errors")
    return errors;
  };

  const handleSubmit = (ev)=>{
    ev.preventDefault();
    const errors = validate();
    if(Object.keys(errors).length===0){
      setFormSuccess("Form submit");
    }else{
      setFormErrors(errors);
    }
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter your full name"
            
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors && formErrors?.name && <span>{formErrors?.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors && formErrors?.email && <span>{formErrors?.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors && formErrors?.password && (
            <span>{formErrors?.password}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {formSuccess !=="" && <span>{formSuccess}</span>}
      </form>
    </div>
  );
};

export default RegisterForm;
