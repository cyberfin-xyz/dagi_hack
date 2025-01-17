import React, { useEffect, useRef } from "react";

import {
    SearchContainer,
    StyledInput,
    SearchIconWrapper,
} from "./styles";

interface IProps {
    value: string;
    onChange: (arg: any) => void;
    placeholder?: string;
    withFocus?: boolean
}

const SearchField = ({ value, onChange, withFocus = false, placeholder = '' }: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (e: any) => onChange(e.target.value);

    useEffect(() => {
        if (withFocus && inputRef.current) inputRef.current.focus();
    }, []);

    return <SearchContainer>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInput
            type="search"
            value={value}
            onChange={handleInput}
            ref={inputRef}
            placeholder={placeholder}
            id="input"
            autoComplete="off"
        />
    </SearchContainer>
}

export default SearchField;

const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22 22L20 20" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>


