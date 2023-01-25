import styled from "styled-components";

export const StyledInput = styled.input`
   font-size: 14px;
    color: #333;
    display: block;
    width: 100%;
    height: 35px;
    background: 0 0;
    border: none;
    outline: none;
    &::placeholder{
        color: ${props => props.colorPlaceholder};
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }
`