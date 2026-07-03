import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";
import { Button, Table, Card } from "react-bootstrap";

function Dashboard() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/");
      setContacts(res.data);
    } catch (err) {
      toast.error("Failed to load contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      await API.delete(`/${id}`);
      toast.success("Contact deleted successfully");
      fetchContacts();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container mt-4" style={{ marginLeft: "270px" }}>
      <Card className="shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Contact Manager</h2>

          <Link to="/add">
            <Button>Add Contact</Button>
          </Link>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th width="180">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No Contacts Found
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>

                  <td>
                    <Link to={`/edit/${contact._id}`}>
                      <Button
                        size="sm"
                        variant="warning"
                        className="me-2"
                      >
                        Edit
                      </Button>
                    </Link>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => deleteContact(contact._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

export default Dashboard;