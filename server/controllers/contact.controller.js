import Contact from "../models/contact.model.js";
import extend from "lodash/extend.js";

export const createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.json({ message: "Contact created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().select("firstname lastname email");
    res.json(contacts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getContactById = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    req.profile = contact;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not retrieve contact" });
  }
};

export const updateContact = async (req, res) => {
  try {
    let contact = extend(req.profile, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await req.profile.deleteOne();
    res.json({ message: "Contact deleted successfully", deletedContact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { createContact, getContacts, getContactById, updateContact, deleteContact };
