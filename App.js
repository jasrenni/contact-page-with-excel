import React, { useState } from 'react';
import './App.css';
import axios from 'axios'; // Import axios for making HTTP requests

const form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone:'',
    roles:'',

  });
  

  // Function to update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
     
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://sheet.best/api/sheets/4742d737-cab3-4fc6-b274-37baae036e24',
        formData
      );
         console.log('API Response:', response);
      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        alert('Form submitted successfully!');
      } else {
        console.error('Failed to submit form. Unexpected status:', response.status);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };
  

  return (

        <div className="name">Name</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="name1"
           
          />
          <div className="line" />
          <div className="e-mail">E -mail</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="e-mail1"
            
          />
          <div className="line1" />
          <div className="your-message">Your Message</div>
          {/* Textarea for the message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="rectangle-below-message"
            placeholder="Enter your message here"
          />
          <div className="rectangle-div" />
          
          <div className="rectangle-div" />
          {/* Submit button */}
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
      </div>


   
       );
};

export default form;
