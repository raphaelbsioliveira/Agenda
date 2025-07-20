import React, { useState, useEffect, useCallback } from "react";
import { Contact } from "../../types/Contact";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import ContactList from "./../../components/features/ContactList/ContactList";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  PageWrapper,
  Header,
  ModalContent,
  ModalActions,
} from "./ContactListPage.styles";
import * as contactService from "../../services/contactService";

function ContactListPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

  const fetchContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await contactService.getContacts();
      setContacts(data);
    } catch (err) {
      setError("Falha ao carregar contatos.");
      toast.error("Não foi possível carregar os contatos.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  async function handleDeleteContact() {
    if (!contactToDelete) return;
    try {
      await contactService.deleteContact(contactToDelete.id);
      setContacts((prev) => prev.filter((c) => c.id !== contactToDelete.id));
      handleCloseDeleteModal();
      toast.success("Contato excluído com sucesso!");
    } catch {
      toast.error("Falha ao excluir contato.");
    }
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedContacts = filteredContacts.reduce((groups, contact) => {
    const letter = contact.name[0].toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(contact);
    groups[letter].sort((a, b) => a.name.localeCompare(b.name));
    return groups;
  }, {} as { [key: string]: Contact[] });

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSuggestionClick(suggestion: string) {
    setSearchTerm(suggestion);
  }

  function handleOpenDeleteModal(contact: Contact) {
    setContactToDelete(contact);
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setContactToDelete(null);
    setIsDeleteModalOpen(false);
  }

  if (isLoading)
    return (
      <PageWrapper>
        <h1>Carregando...</h1>
      </PageWrapper>
    );
  if (error)
    return (
      <PageWrapper>
        <h1>{error}</h1>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <Header>
        <h1>Meus Contatos</h1>
        <Link to="/adicionar">
          <Button>Adicionar Contato</Button>
        </Link>
      </Header>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        onSuggestionClick={handleSuggestionClick}
        suggestions={searchTerm ? filteredContacts.map((c) => c.name) : []}
      />
      <div style={{ marginTop: "30px" }}>
        <ContactList
          groupedContacts={groupedContacts}
          onDeleteClick={handleOpenDeleteModal}
        />
      </div>
      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <ModalContent>
          <h2>Confirmar Exclusão</h2>
          <p>
            Você tem certeza que deseja excluir o contato
            <strong>"{contactToDelete?.name}"</strong>?
            <br />
            Esta ação não pode ser desfeita.
          </p>
          <ModalActions>
            <Button onClick={handleCloseDeleteModal}>Cancelar</Button>
            <Button onClick={handleDeleteContact}>Confirmar Exclusão</Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </PageWrapper>
  );
}

export default ContactListPage;
