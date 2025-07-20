import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../../../types/Contact";
import Button from "../../Button/Button";
import {
  ItemWrapper,
  ContactInfo,
  ContactName,
  ContactDetail,
  ActionButtons,
} from "./ContactListItem.styles";

interface ContactListItemProps {
  contact: Contact;
  onDeleteClick: (contact: Contact) => void;
}

function ContactListItem({ contact, onDeleteClick }: ContactListItemProps) {
  return (
    <ItemWrapper>
      <ContactInfo>
        <ContactName>{contact.name}</ContactName>
        <ContactDetail>{contact.phones[0]?.number}</ContactDetail>
      </ContactInfo>
      <ActionButtons>
        <Link to={`/editar/${contact.id}`}>
          <Button>Editar</Button>
        </Link>
        <Button onClick={() => onDeleteClick(contact)}>Excluir</Button>
      </ActionButtons>
    </ItemWrapper>
  );
}

export default ContactListItem;
