import { useState, useEffect } from "react";
import API from "../services/api";

function Modal({ isOpen, onClose, contact, mode, refreshContacts }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Load selected contact into form when modal opens
  useEffect(() => {
    if (contact && mode === "edit") {
      setFormData(contact);
    }
  }, [contact, mode]);

  if (!isOpen) return null;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // UPDATE CONTACT
  const handleUpdate = async () => {
    try {
      await API.put(`/contacts/${contact._id}`, formData);
      refreshContacts();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE CONTACT
  const handleDelete = async () => {
    try {
      await API.delete(`/contacts/${contact._id}`);
      refreshContacts();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>
          {mode === "edit" ? "Edit Contact" : "Delete Contact"}
        </h2>

        {/* EDIT MODE */}
        {mode === "edit" && (
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />

            <button onClick={handleUpdate}>Update</button>
          </div>
        )}

        {/* DELETE MODE */}
        {mode === "delete" && (
          <div>
            <p>Are you sure you want to delete <b>{contact?.name}</b>?</p>

            <button onClick={handleDelete} style={{ background: "red" }}>
              Delete
            </button>
          </div>
        )}

        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
  },
};

export default Modal;