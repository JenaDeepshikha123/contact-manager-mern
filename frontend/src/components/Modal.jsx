import { useState, useEffect } from "react";
import API from "../services/api";

function Modal({ isOpen, onClose, contact, mode, refreshContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (contact) {
      setForm(contact);
    }
  }, [contact]);

  if (!isOpen || !contact) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await API.put(`/contacts/${contact._id}`, form);
    refreshContacts();
    onClose();
  };

  const handleDelete = async () => {
    await API.delete(`/contacts/${contact._id}`);
    refreshContacts();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {mode === "edit" ? (
          <>
            <h3>Edit Contact</h3>

            <input name="name" value={form.name} onChange={handleChange} />
            <input name="email" value={form.email} onChange={handleChange} />
            <input name="phone" value={form.phone} onChange={handleChange} />
            <input name="address" value={form.address} onChange={handleChange} />

            <button onClick={handleUpdate}>Update</button>
          </>
        ) : (
          <>
            <h3>Delete Contact?</h3>
            <p>{contact.name}</p>

            <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
              Delete
            </button>
          </>
        )}

        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;