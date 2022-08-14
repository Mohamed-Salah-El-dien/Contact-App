import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../store/contactSlice';
import './AddPost.css';

const AddPost = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      addContact({
        id: nanoid(),
        Name: name,
        Email: email,
        Phone: phone,
      })
    );
    // navigate('/contactApp');
    navigate('/');
  };

  return (
    <div className="post-container">
      {/* ************************************ */}
      <h1 className="post-title">Add Contact</h1>
      {/* ************************************ */}
      <div className="form-container">
        <form>
          <div className="input-container">
            <input
              className="contact-input"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              className="contact-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              className="contact-input"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="button"
              value="add contact"
              className="add-btn"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      {/* ************************************ */}
    </div>
  );
};

export default AddPost;
