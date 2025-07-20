import styled from "styled-components";
import { device } from "./../../../styles/breakpoints";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
  }

  @media ${device.tablet} {
    padding: 14px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 12px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContactDetail = styled.span`
  font-size: 14px;
  color: #666;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;
