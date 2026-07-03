const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Create Contact
router.post("/", createContact);

// Get All Contacts
router.get("/", getContacts);

// Get Contact by ID
router.get("/:id", getContactById);

// Update Contact
router.put("/:id", updateContact);

// Delete Contact
router.delete("/:id", deleteContact);

module.exports = router;