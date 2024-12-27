import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    // 1. Validate Name (Required)
    if (!formData.name) {
      errors.name = 'Name is required.';
    }

    // 2. Validate Email Format
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }

    // 3. Validate Mobile Number
    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required.';
    } else if (!/^[789]\d{9}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number must start with 7, 8, or 9 and be 10 digits long.';
    }

    // 4. Validate Password Complexity
    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)
    ) {
      errors.password =
        'Password must be at least 8 characters long, and include 1 uppercase, 1 lowercase, 1 number, and 1 special character.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Handle form submission logic
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        {/* Mobile Field */}
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
