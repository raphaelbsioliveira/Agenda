import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #00ff00;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #7cfc00;
  }

  &:active {
    background-color: #2fe44aff;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
