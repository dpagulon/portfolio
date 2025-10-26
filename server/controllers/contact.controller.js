import Contact from "../models/contact.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(201).json({
      message: "Contact created successfully!",
      contact,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().select("firstname lastname email");
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const getContactById = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact)
      return res.status(404).json({
        error: "Contact not found",
      });
    req.contact = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve contact",
    });
  }
};

const readContact = (req, res) => {
  return res.json(req.contact);
};

const updateContact = async (req, res) => {
  try {
    let contact = req.contact;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = req.contact;
    const deletedContact = await contact.deleteOne();
    res.json({
      message: "Contact deleted successfully",
      deletedContact,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  createContact, getContacts, getContactById, readContact, updateContact, deleteContact
};
