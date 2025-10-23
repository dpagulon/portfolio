import Contact from "../models/contact.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: "Successful!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getContacts = async (req, res) => {
  try {
    let contacts = await Contact.find().select("firstname lastname email");
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const getContactById = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(400).json({
        error: "Contact not found",
      });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve contact",
    });
  }
};
const updateContact = async (req, res) => {
  try {
    let contact = req.profile;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    contact.hashed_password = undefined;
    contact.salt = undefined;
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const deleteContact = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    deletedContact.hashed_password = undefined;
    deletedContact.salt = undefined;
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { createContact, getContactById, getContacts, deleteContact, updateContact };
