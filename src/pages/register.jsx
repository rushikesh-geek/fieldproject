import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    registrationNo: '',
    state: '',
    address: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful! Please login.');
    navigate('/login'); // Redirect to Login after registration
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="text"
        name="registrationNo"
        placeholder="Registration Number"
        value={formData.registrationNo}
        onChange={handleChange}
        required
      />
      <select name="state" value={formData.state} onChange={handleChange} required>
        <option value="">Select State</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Goa">Goa</option>
        <option value="Kerala">Kerala</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Punjab">Punjab</option>
        <option value="Haryana">Haryana</option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Tripura">Tripura</option>
        <option value="Asaam">Asaam</option>
        
      </select>
      <input
        type="text"
        name="address"
        placeholder="Address of Practice"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
