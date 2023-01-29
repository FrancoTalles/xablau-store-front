import React, { useEffect, useState } from "react";
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
  const [refresh, setRefresh] = useState(false);
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const [totalValue, setTotalValue] = useState(0);

  function removeProduct(id) {
    const newCarrinho = carrinho.filter((p) => p._id !== id);
    localStorage.setItem("carrinho", JSON.stringify(newCarrinho));
    setCarrinho([newCarrinho]);
    setRefresh(!refresh);
  }

  useEffect(() => {
    const localCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    setCarrinho(localCarrinho);
  }, [refresh]);

  console.log("carrinho: ", carrinho);
  return (
    <>
      <Container>
        <Header></Header>

        <ShopContainer>
          <ShopTitle>
            <h2>Carrinho de Compras</h2>
          </ShopTitle>
          {carrinho?.map((item, idx) => (
            <ProductBox
              key={idx}
              image={item.image}
              name={item.name}
              price={item.price}
              id={item._id}
              removeProduct={removeProduct}
            />
          ))}
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
