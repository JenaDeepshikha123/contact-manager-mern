import React, { useState, useEffect } from "react";
import API from "../services/api";

function ContactForm({
  fetchContacts,
  editingContact,
  setEditingContact,
}) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingContact) {
        await API.put(`/contacts/${editingContact._id}`, contact);
        setEditingContact(null);
      } else {
        await API.post("/contacts", contact);
      }

      setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      fetchContacts();
    }catch (err) {
  alert(err.response?.data?.message || "Something went wrong");
}
  };

  return (
    <div className="card">
      <h2>{editingContact ? "Edit Contact" : "Add Contact"}</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={contact.address}
          onChange={handleChange}
        />

        <button className="add-btn" type="submit">
          {editingContact ? "Update Contact" : "Add Contact"}
        </button>

      </form>
    </div>
  );
}

export default ContactForm;