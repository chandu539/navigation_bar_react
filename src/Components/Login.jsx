import React from 'react';
import './Login.css'
import { useFormik } from 'formik';

function Login() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password:"",
      mobile: ""
    },
    validate: (values) => {
      let errors = {};
      //name validation
      //i was mention requied in input tag
      
      // Email validation
       if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email must be in a valid format";
      }
      
      // Mobile number validation
       if (!/^[789]\d{9}$/.test(values.mobile)) {
        errors.mobile = "Mobile number must start with 7, 8, or 9 and be 10 digits long";
      }
      
      // Password validation
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/g.test(values.password)) {
        errors.password = "Password must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character";
      }
      
      if(values.confirm_password !== values.password){
        errors.confirm_password = "Password must same";
      }
      return errors;
    },
    onSubmit: (values , {resetForm}) => {
      alert("Form submitted successfully!");
      console.log('Form values', values);
      resetForm();
    }
  });

  return (
    <div className="table">
      <form className="login_form" onSubmit={formik.handleSubmit}>
        <h1>Login Form</h1>
        
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter the email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter the password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
        

        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Enter the password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.confirm_password? <div className="errors">{formik.errors.confirm_password}</div> : null}


        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="Enter the mobile number"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.mobile ? <div className="errors">{formik.errors.mobile}</div> : null}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
