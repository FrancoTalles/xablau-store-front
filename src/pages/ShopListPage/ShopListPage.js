import React from "react";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import Header from "../../components/Header/Header";
import ProductBox from "./ProductBox.js";
import {
  ShopContainer,
  ShopTitle,
  FinishBuy,
  ShopButton,
  Container,
} from "./styled";

export default function ShopListPage() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  return (
    <>
      <Container>
        <Header></Header>

        <ShopContainer>
          <ShopTitle>
            <h2>Carrinho de Compras</h2>
          </ShopTitle>
          {carrinho?.map((item, index) => {
            <ProductBox carrinho={item} />;
          })}
        </ShopContainer>
        <FinishBuy>
          <div>
            <h1>Valor total: </h1>
            <h1>R$ 1000</h1>
          </div>
          <div>
            <ShopButton hover={"#db7c4e"} background={"#d76b38"}>
              Finalizar Compra
            </ShopButton>
            <ShopButton hover={"#c34167"} background={"#a2103b"}>
              Continuar Comprando
            </ShopButton>
          </div>
        </FinishBuy>
      </Container>
    </>
  );
}
