import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.';
    }

    // Mobile validation
    const mobileRegex = /^[789]\d{9}$/;
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile =
        'Mobile number must start with 7, 8, or 9 and be 10 digits long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Submit form logic here
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="table">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Login Form</h1>

        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter the email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter the password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <br />

        {/* Mobile */}
        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          placeholder="Enter the mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}
        <br />

        {/* Submit Button */}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
