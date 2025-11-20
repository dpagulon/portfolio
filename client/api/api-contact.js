const API_BASE = "/api/contact";

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "API Error");
  return data;
};

export const createContact = async (contact) => {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return handleResponse(response);
};

export const listContacts = async () => {
  const response = await fetch(API_BASE);
  return handleResponse(response);
};

export const getContact = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  return handleResponse(response);
};

export const updateContact = async (id, contact) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return handleResponse(response);
};

export const deleteContact = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  return handleResponse(response);
};
