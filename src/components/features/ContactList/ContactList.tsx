import React from "react";
import { Contact } from "../../../types/Contact";
import ContactListItem from "../ContactListItem/ContactListItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

const NoContactsMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
`;

export const GroupHeader = styled.h2`
  background-color: #f4f7f6;
  padding: 8px 16px;
  margin: 0;
  font-size: 16px;
  color: #1b369a;
  border-bottom: 1px solid #eee;
`;

interface ContactListProps {
  groupedContacts: { [key: string]: Contact[] };
  onDeleteClick: (contact: Contact) => void;
}

function ContactList({ groupedContacts, onDeleteClick }: ContactListProps) {
  const groupKeys = Object.keys(groupedContacts).sort();

  return (
    <ListWrapper>
      {groupKeys.length > 0 ? (
        groupKeys.map((letter) => (
          <div key={letter}>
            <GroupHeader>{letter}</GroupHeader>
            {groupedContacts[letter].map((contact) => (
              <ContactListItem
                key={contact.id}
                contact={contact}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
        ))
      ) : (
        <NoContactsMessage>Nenhum contato encontrado.</NoContactsMessage>
      )}
    </ListWrapper>
  );
}

export default ContactList;
