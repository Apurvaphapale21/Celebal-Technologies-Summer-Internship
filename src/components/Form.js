import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharRegex = /^\d{12}$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Enter valid 10-digit number';
    if (!formData.country) newErrors.country = 'Select a country';
    if (!formData.city) newErrors.city = 'Select a city';
    if (!panRegex.test(formData.pan)) newErrors.pan = 'Invalid PAN format';
    if (!aadharRegex.test(formData.aadhar)) newErrors.aadhar = 'Invalid Aadhar number';

    return newErrors;
  };

  useEffect(() => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
          window.alert("✅ Form Submitted Successfully!");
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        {/* Last Name */}
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        {/* Username */}
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        {errors.username && <span className="error">{errors.username}</span>}

        {/* Email */}
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        {/* Password */}
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>
          <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
          Show Password
        </label>
        {errors.password && <span className="error">{errors.password}</span>}

        {/* Phone No */}
        <div className="phone">
          <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

        {/* Country */}
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}

        {/* City */}
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nashik">Nashik</option>
        </select>
        {errors.city && <span className="error">{errors.city}</span>}

        {/* PAN No */}
        <input name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} />
        {errors.pan && <span className="error">{errors.pan}</span>}

        {/* Aadhar No */}
        <input name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} />
        {errors.aadhar && <span className="error">{errors.aadhar}</span>}

        {/* Submit */}
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
