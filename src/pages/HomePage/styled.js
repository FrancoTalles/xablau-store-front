import styled from "styled-components";
import {
  mainDivColor,
  preçoCor,
  preçoEstoque,
  produtoColor,
} from "../../constants/colors";

export const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  padding-top: 100px;
  display: flex;
  box-sizing: border-box;
`;

export const AdDiv = styled.div`
  background-color: white;
  width: 15vw;
  height: 80vh;
  margin-top: 3vh;
  margin-left: 1vw;
  border-radius: 5px;
  box-sizing: border-box;
  img {
    width: 15vw;
    height: 80vh;
    object-fit: cover;
  }
`;

export const MainDiv = styled.div`
  width: 81vw;
  height: 80vh;
  background-color: ${mainDivColor};
  margin-top: 3vh;
  margin-left: 2vw;
  border-radius: 5px;
  display: flex;
  padding-left: 1.46vw;
  padding-bottom: 2.87vh;
  flex-wrap: wrap;
  overflow-y: scroll;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const Produto = styled.div`
  width: 18.3vw;
  height: 43.16vh;
  background-color: ${produtoColor};
  margin-top: 2.5vh;
  margin-right: 1.09vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 7px 1px grey;
  &:hover {
    box-shadow: 2px 2px 7px 1px grey;
    cursor: pointer;
  }
`;

export const Imagem = styled.img`
  width: 84%;
  height: 21.15vh;
  margin-top: 1.72vh;
  margin-bottom: 1.43vh;
  border-radius: 5px;
  object-fit: contain;
  border: 1px solid ${"#d3d3d3"};
`;

export const DivDetails = styled.div`
  width: 84%;
  height: 10.93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.17vw;
    word-break: break-all;
    margin-top: 0.71vh;
    text-align: center;
    font-weight: 700;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.46vw;
    margin-top: 1.43vh;
    font-weight: 700;
    color: ${preçoCor};
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.73vw;
    margin-top: 1.43vh;
    padding-bottom: 0.71vh;
    word-break: break-all;
    font-weight: 700;
    color: ${preçoEstoque};
  }
`;

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 1.43vh;
`;
