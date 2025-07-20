import React, { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  SearchContainer,
  SearchInput,
  SearchIconWrapper,
  SuggestionsWrapper,
  SuggestionItem,
} from "./SearchBar.styles";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSuggestionClick: (suggestion: string) => void;
  suggestions: string[];
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  onSuggestionClick,
  suggestions,
  placeholder,
}: SearchBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchBarRef, () => {
    setIsDropdownOpen(false);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setIsDropdownOpen(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick(suggestion);
    setIsDropdownOpen(false);
  };

  return (
    <SearchContainer ref={searchBarRef}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)}
        placeholder={placeholder || "Buscar contato..."}
        autoComplete="off"
      />
      {isDropdownOpen && suggestions.length > 0 && (
        <SuggestionsWrapper>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsWrapper>
      )}
    </SearchContainer>
  );
}
