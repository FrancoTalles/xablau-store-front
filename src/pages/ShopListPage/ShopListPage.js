import React from "react";
import { ScreenContainer } from "../../components/ScreenContainer";
import styled from "styled-components";
import nodelogo from "../../assets/logo-nodejs.svg";


export default function ShopListPage() {
  return (
    <>
      <Container>
        <ShopContainer>
          <ShopTitle>
            <h2>Carrinho de Compras</h2>
          </ShopTitle>
          <ProductBox>
            <img src={nodelogo} alt="exp" />
            <p>NODEJS BLABLA</p>
            <h2>R$ 100</h2>
            <ion-icon name="trash"></ion-icon>
          </ProductBox>
        </ShopContainer>
      </Container>
    </>
  );
}
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ShopContainer = styled.div`
  width: 900px;
  min-height: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: grey;
  box-shadow: 0 0 7px 1px grey;
`;

const ProductBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  img {
    width: 50px;
    height: 50px;
  }
  ion-icon {
    color: red;
  }
`;
const ShopTitle = styled.div`
  width: 100%;
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
`;
