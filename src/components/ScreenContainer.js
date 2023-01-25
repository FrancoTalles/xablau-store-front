import styled from "styled-components";

export const ScreenContainer= styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${props => props.background}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    display: flex;
    align-items: center;
    padding: 30px 50px;
`;