import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${"#a2103b"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  img{
    width: 200px;
    height: 200px;
    margin-left: 150px;
  }
  /* h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 35px;
    font-style: normal;
    margin-left: 100px;
    color: white;
  } */
`;

export const LogoDivStyle = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-evenly;
  margin-right: 100px;
  ion-icon {
    color: white;
    font-size: 35px;
  }
`;
