import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectContactById } from '../../store/contactSlice';
import { updateContact } from '../../store/contactSlice';
import '../AddContact/AddPost.css';

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentContact = useSelector((state) => selectContactById(state, id));

  const [name, setName] = useState(currentContact?.Name);
  const [email, setEmail] = useState(currentContact?.Email);
  const [phone, setPhone] = useState(currentContact?.Phone);

  const canSave = [name, email, phone].every(Boolean);

  const handleSubmit = () => {
    if (canSave) {
      dispatch(
        updateContact({
          id: currentContact.id,
          changes: {
            Name: name,
            Email: email,
            Phone: phone,
          },
        })
      );
      navigate('/');
      // navigate('/contactApp');
    }
  };

  return (
    <div className="post-container">
      <div className="form-container edit-container">
        {currentContact ? (
          <form>
            <div className="input-container">
              <input
                className="contact-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                className="contact-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                className="contact-input"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                type="button"
                value="Update Contact"
                className="add-btn"
                onClick={handleSubmit}
              />
            </div>
          </form>
        ) : (
          <h1 className="text-center">No Contact Found</h1>
        )}
      </div>
    </div>
  );
};

export default EditContact;
