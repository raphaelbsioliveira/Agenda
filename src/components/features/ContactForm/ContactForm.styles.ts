import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
`;

export const DynamicField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;
