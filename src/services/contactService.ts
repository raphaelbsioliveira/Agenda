import axios from "axios";
import { Contact } from "../types/Contact";
import { ContactFormData } from "../schemas/contactSchema";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
});

export async function getContacts(): Promise<Contact[]> {
  const response = await apiClient.get("/contacts");
  return response.data;
}

export async function getContactById(id: string): Promise<Contact> {
  const response = await apiClient.get(`/contacts/${id}`);
  return response.data;
}

export async function createContact(
  contactData: ContactFormData
): Promise<Contact> {
  const response = await apiClient.post("/contacts", contactData);
  return response.data;
}

export async function updateContact(
  id: string,
  contactData: Partial<ContactFormData>
): Promise<Contact> {
  const response = await apiClient.put(`/contacts/${id}`, contactData);
  return response.data;
}

export async function deleteContact(id: string): Promise<void> {
  await apiClient.delete(`/contacts/${id}`);
}
