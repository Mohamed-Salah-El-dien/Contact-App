import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactSlice';
import { selectAllContcats, totalContacts } from '../../store/contactSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenSquare } from '@fortawesome/fontawesome-free-solid';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContcats);
  const total = useSelector(totalContacts);

  return (
    <div className="home-container">
      <Link to="add" className="add-link">
        Add Contact
      </Link>
      <div className="card-container">
        {total > 0 ? (
          contacts.map((contact, id) => (
            <div className="card" key={id}>
              <div className="top">
                <h5 className="id">{id + 1}</h5>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete"
                  title="Delete"
                  onClick={() => dispatch(deleteContact(contact.id))}
                />
              </div>
              <div className="info">
                <h3 className="name" title={contact.Name}>
                  {contact.Name}
                </h3>
                <h4 className="email" title={contact.Email}>
                  {contact.Email}
                </h4>
                <h3 className="phone" title={contact.Phone}>
                  {contact.Phone}
                </h3>
              </div>
              <Link to={`edit/${contact.id}`} className="edit-link">
                <FontAwesomeIcon
                  icon={faPenSquare}
                  className="edit"
                  title="Edit"
                />
              </Link>
            </div>
          ))
        ) : (
          <h1 className="empty">No contacts found</h1>
        )}
      </div>

      {/* <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {total > 0 ? (
              contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.Name}</td>
                  <td>{contact.Email}</td>
                  <td>{contact.Phone}</td>
                  <td>
                    <Link to={`edit/${contact.id}`} className="edit-link">
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        className="edit"
                        title="Edit"
                      />
                    </Link>

                    <FontAwesomeIcon
                      icon={faTrash}
                      className="delete"
                      title="Delete"
                      onClick={() => dispatch(deleteContact(contact.id))}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>No contacts found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Home;
