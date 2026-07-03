import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./services/api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contacts");
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">📒 Contact Manager</h1>

      <div className="layout">
        <div className="left">
          <ContactForm
            fetchContacts={fetchContacts}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
          />
        </div>

        <div className="right">
          <ContactList
            contacts={contacts}
            fetchContacts={fetchContacts}
            setEditingContact={setEditingContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;