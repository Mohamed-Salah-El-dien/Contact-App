import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './components/Home/Home';
import AddPost from './components/AddContact/AddPost';
import EditContact from './components/EditContact/EditContact';
import './App.css';

function App() {
  return (
    <div className="contact-app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="add" element={<AddPost />} />
          <Route exact path="edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
