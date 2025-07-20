import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import { EditContactPage } from "./pages/EditContactPage/EditContactPage";
import { Toast } from "./components/Toast/Toast";
import { GlobalStyle } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactListPage />} />
          <Route path="/adicionar" element={<AddContactPage />} />
          <Route path="/editar/:id" element={<EditContactPage />} />
        </Routes>
      </BrowserRouter>
      <Toast />
    </>
  );
}

export default App;
