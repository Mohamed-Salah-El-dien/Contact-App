import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPost from './AddContact/AddPost';
import EditContact from './EditContact/EditContact';
import Home from './Home/Home';
import Navbar from './Navbar/index';
import './contactApp.css';

function contactApp() {
  return (
    <div className="contact-app">
      <Navbar />
      <Routes>
        <Route exact index element={<Home />} />
        <Route exact path="add" element={<AddPost />} />
        <Route exact path="edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default contactApp;
