import React from "react";
import { useFormContext, useFieldArray, Control } from "react-hook-form";
import { Input } from "../../Input/Input";
import Button from "../../Button/Button";
import { Form, FieldGroup, DynamicField } from "./ContactForm.styles";
import { ContactFormData } from "../../../schemas/contactSchema";

interface ContactFormProps {
  control: Control<ContactFormData>;
}

export function ContactForm({ control }: ContactFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormData>();

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: "phones",
  });

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
  } = useFieldArray({
    control,
    name: "addresses",
  });

  return (
    <Form>
      <Input
        label="Nome Completo"
        placeholder="Digite o nome do contato"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="E-mail"
        type="email"
        placeholder="Digite o e-mail"
        error={errors.email?.message}
        {...register("email")}
      />

      <FieldGroup>
        <label>Telefones</label>
        {phoneFields.map((field, index) => (
          <DynamicField key={field.id}>
            <Input
              placeholder="(00) 00000-0000"
              error={errors.phones?.[index]?.number?.message}
              {...register(`phones.${index}.number` as const)}
            />
            <Button type="button" onClick={() => removePhone(index)}>
              Remover
            </Button>
          </DynamicField>
        ))}
        <Button type="button" onClick={() => appendPhone({ number: "" })}>
          Adicionar Telefone
        </Button>
      </FieldGroup>

      <FieldGroup>
        <label>Endereços</label>
        {addressFields.map((field, index) => (
          <div key={field.id}>
            <DynamicField>
              <Input
                placeholder="Rua, Avenida, etc."
                error={errors.addresses?.[index]?.street?.message}
                {...register(`addresses.${index}.street` as const)}
              />
              <Button type="button" onClick={() => removeAddress(index)}>
                Remover
              </Button>
            </DynamicField>
            <div style={{ marginTop: "10px" }}>
              <Input
                placeholder="Cidade"
                error={errors.addresses?.[index]?.city?.message}
                {...register(`addresses.${index}.city` as const)}
              />
            </div>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => appendAddress({ street: "", city: "" })}
        >
          Adicionar Endereço
        </Button>
      </FieldGroup>
    </Form>
  );
}
