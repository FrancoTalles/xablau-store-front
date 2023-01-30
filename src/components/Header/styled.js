import styled from "styled-components";
import { headerColor, ionIconHeaderColor } from "../../constants/colors";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 100px;
  img {
    width: 200px;
    height: 200px;
  
  }
`;

export const LogoDivStyle = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-evenly;
  h1 {
    font-family: "Poppins", sans-serif;
    color: ${ionIconHeaderColor};
    font-size: 20px;
    margin-top: 8px;
    margin-right: -15px;
  }
  ion-icon {
    color: ${ionIconHeaderColor};
    font-size: 35px;
  }
`;
