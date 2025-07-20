import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const PageWrapper = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const FormActions = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;

    & > button,
    & > a {
      width: 100%;
    }

    & > a > button {
      width: 100%;
    }
  }
`;
