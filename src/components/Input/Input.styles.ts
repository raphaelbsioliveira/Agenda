import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.hasError ? "#9eed83ff" : "#ddd")};
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${(props) => (props.hasError ? "#77be51ff" : "#1b219aff")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError ? "rgba(211, 47, 47, 0.1)" : "rgba(106, 27, 154, 0.1)"};
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 6px;
  font-size: 12px;
  color: #d32f2f;
`;
