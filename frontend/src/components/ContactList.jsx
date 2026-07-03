import React from "react";
import API from "../services/api";

function ContactList({
  contacts,
  fetchContacts,
  setEditingContact,
}) {
  const deleteContact = async (id) => {
    try {
      await API.delete(`/contacts/${id}`);
      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">

      <h2>Contact List</h2>

      {contacts.length === 0 ? (
        <p>No Contacts Found</p>
      ) : (
        contacts.map((c) => (
          <div className="contact-item" key={c._id}>

            <h3>{c.name}</h3>

            <p>📧 {c.email}</p>

            <p>📞 {c.phone}</p>

            <p>📍 {c.address}</p>

            <div className="btn-row">

              <button
                onClick={() => setEditingContact(c)}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteContact(c._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default ContactList;