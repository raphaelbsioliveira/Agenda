import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { ContactForm } from "../../components/features/ContactForm/ContactForm";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { PageWrapper, FormActions } from "./AddContactPage.styles";
import * as contactService from "../../services/contactService";
import { schema, ContactFormData } from "../../schemas/contactSchema";

function AddContactPage() {
  const navigate = useNavigate();
  const methods = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phones: [{ number: "" }],
      addresses: [{ street: "", city: "" }],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactService.createContact(data);
      toast.success("Contato adicionado com sucesso!");
      navigate("/");
    } catch {
      toast.error("Falha ao adicionar contato.");
    }
  };

  return (
    <PageWrapper>
      <h1>Adicionar Novo Contato</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ContactForm control={methods.control} />
          <FormActions>
            <Button type="submit">Salvar Contato</Button>
            <Link to="/">
              <Button type="button">Cancelar</Button>
            </Link>
          </FormActions>
        </form>
      </FormProvider>
    </PageWrapper>
  );
}

export default AddContactPage;
