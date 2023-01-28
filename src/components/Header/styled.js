import styled from "styled-components";
import { headerColor, ionIconHeaderColor } from "../../constants/colors";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  img {
    width: 200px;
    height: 200px;
    margin-left: 150px;
  }
`;

export const LogoDivStyle = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-evenly;
  margin-right: 100px;
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
