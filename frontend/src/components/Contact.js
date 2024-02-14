import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    problem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your logic to handle the form data (e.g., send it to a server, etc.)
  };

  return (
    <div>
      <center>
        <h1>Contact Us</h1>
      </center>
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <h3>
          <EmailIcon /> sonuoju@gmail.com
        </h3>
        <h3>
          <PhoneIcon /> 7382694691
        </h3>
        <h4>
          <LocationOnIcon /> KLEF VJA CAMPUS
        </h4>
      </div>
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <p>
          If you have any questions or are facing a problem, please use the
          contact form below:
        </p>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Describe the Problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;