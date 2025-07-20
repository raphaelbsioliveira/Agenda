import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O e-mail é obrigatório."),
  phones: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().optional(),
        number: yup.string().required("O telefone é obrigatório."),
      })
    )
    .min(1, "Adicione pelo menos um telefone.")
    .required("Adicione pelo menos um telefone."),
  addresses: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().optional(),
        street: yup.string().required("A rua é obrigatória."),
        city: yup.string().required("A cidade é obrigatória."),
      })
    )
    .min(1, "Adicione pelo menos um endereço.")
    .required("Adicione pelo menos um endereço."),
});

export type ContactFormData = yup.InferType<typeof schema>;
