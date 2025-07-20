import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const PageWrapper = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
