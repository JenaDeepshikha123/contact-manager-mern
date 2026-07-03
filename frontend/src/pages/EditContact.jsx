import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import API from "../services/api";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const res = await API.get(`/${id}`);
      setEditingContact(res.data);
    } catch (error) {
      toast.error("Unable to load contact");
      navigate("/");
    }
  };

  const refresh = () => {
    navigate("/");
  };

  if (!editingContact) {
    return (
      <div style={{ marginLeft: "270px", padding: "30px" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ marginLeft: "270px" }}>
      <Card className="shadow p-4">
        <h2 className="mb-4">Edit Contact</h2>

        <ContactForm
          fetchContacts={refresh}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />
      </Card>
    </div>
  );
}

export default EditContact;