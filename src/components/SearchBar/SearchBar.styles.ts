import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px 12px 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #1b9a70ff;
    box-shadow: 0 0 0 3px rgba(106, 27, 154, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
`;

export const SuggestionsWrapper = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SuggestionItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;
