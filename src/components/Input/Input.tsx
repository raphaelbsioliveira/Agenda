import React from "react";
import {
  InputWrapper,
  StyledLabel,
  StyledInput,
  ErrorMessage,
} from "./Input.styles";

interface InputProps {
  label?: string;
  error?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  id?: string;
  name?: string;
  disabled?: boolean;
}

export function Input({ label, error, ...props }: InputProps) {
  const hasError = !!error;

  return (
    <InputWrapper>
      {label && (
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      )}
      <StyledInput hasError={hasError} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
