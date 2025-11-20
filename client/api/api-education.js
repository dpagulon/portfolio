const API_BASE = "/api/education";

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "API Error");
  return data;
};

export const createEducation = async (education) => {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(education),
  });
  return handleResponse(response);
};

export const listEducation = async () => {
  const response = await fetch(API_BASE);
  return handleResponse(response);
};

export const getEducation = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  return handleResponse(response);
};

export const updateEducation = async (id, education) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(education),
  });
  return handleResponse(response);
};

export const deleteEducation = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  return handleResponse(response);
};
