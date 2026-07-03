import { useState } from "react";
import API from "../services/api";

function AddContact({ fetchContacts }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 VALIDATION (STRICT)
    if (
      contact.name.trim() === "" ||
      contact.email.trim() === "" ||
      contact.phone.trim() === "" ||
      contact.address.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    try {
      await API.post("/contacts", contact);

      setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      await fetchContacts();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding contact");
    }
  };

  return (
    <div className="form-container">
      <h3>Add Contact</h3>

      {/* 🔥 IMPORTANT FIX */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={contact.address}
          onChange={handleChange}
        />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;