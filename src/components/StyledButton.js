import styled from "styled-components";

export const StyledButton= styled.button`
    width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  background: ${props => props.background};
  color: #ffffff;
  &:hover{
    background: ${props => props.hover};
  }
`