import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../../components/features/ContactForm/ContactForm";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { PageWrapper, FormActions } from "./EditContactPage.styles";
import * as contactService from "../../services/contactService";
import { schema, ContactFormData } from "../../schemas/contactSchema";

export function EditContactPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!id) return;
    async function fetchContact() {
      try {
        const data = await contactService.getContactById(id!);
        methods.reset(data);
      } catch {
        toast.error("Contato não encontrado.");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    }
    fetchContact();
  }, [id, methods, navigate]);

  const onSubmit = async (data: ContactFormData) => {
    if (!id) return;
    try {
      await contactService.updateContact(id, data);
      toast.success("Contato atualizado com sucesso!");
      navigate("/");
    } catch {
      toast.error("Falha ao atualizar contato.");
    }
  };

  if (isLoading)
    return (
      <PageWrapper>
        <h1>Carregando...</h1>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <h1>Editar Contato</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ContactForm control={methods.control} />
          <FormActions>
            <Button type="submit">Salvar Alterações</Button>
            <Link to="/">
              <Button type="button">Cancelar</Button>
            </Link>
          </FormActions>
        </form>
      </FormProvider>
    </PageWrapper>
  );
}
