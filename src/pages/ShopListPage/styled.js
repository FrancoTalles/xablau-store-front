import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ccc;
  a {
    text-decoration: none;
  }
`;

export const ShopContainer = styled.div`
  width: 900px;
  height: 600px;
  overflow-y: scroll;
  margin-top: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 7px 1px grey;
`;

export const ShopTitle = styled.div`
  margin: 10px 0;
  padding-left: 10px;
  width: 100%;
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: black;
  }
`;

export const FinishBuy = styled.div`
  width: 900px;
  height: 100px;
  margin: 20px 0;
  background-color: white;
  box-shadow: 0 0 7px 1px grey;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }

  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0 10px;
  }
`;

export const ShopButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  background: ${(props) => props.background};
  color: #ffffff;
  &:hover {
    background: ${(props) => props.hover};
  }
`;
