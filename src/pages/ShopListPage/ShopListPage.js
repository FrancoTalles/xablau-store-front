import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
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
  const { carrinho, setCarrinho, setTotalValue } = useContext(CarrinhoContext);

  function removeProduct(id) {
    const newCarrinho = carrinho.filter((p) => p._id !== id);
    localStorage.setItem("carrinho", JSON.stringify(newCarrinho));
    setCarrinho([newCarrinho]);
    setRefresh(!refresh);
  }

  function addQuant(id) {
    const auxCarrinho = [...carrinho];
    const increment = auxCarrinho.find((i) => i._id === id);
    const index = auxCarrinho.findIndex((i) => i._id === id);

    increment.quant++;
    auxCarrinho.splice(index, 1, increment);
    localStorage.setItem("carrinho", JSON.stringify(auxCarrinho));
    setCarrinho(auxCarrinho);
    setRefresh(!refresh);
  }

  function minusQuant(id) {
    const auxCarrinho = [...carrinho];
    const increment = auxCarrinho.find((i) => i._id === id);
    const index = auxCarrinho.findIndex((i) => i._id === id);
    const identificador = id;
    console.log(identificador)

    increment.quant--;

    auxCarrinho.splice(index, 1, increment);
    localStorage.setItem("carrinho", JSON.stringify(auxCarrinho));
    setCarrinho(auxCarrinho);
    setRefresh(!refresh);

    if (increment.quant <= 0){
      console.log("Entrou aqui")
      removeProduct(identificador);
    }
  }

  const total = carrinho?.reduce((acc, item) => {
    return item.price > 0 ? acc + item.price * item.quant : acc + 0;
  }, 0);

  useEffect(() => {
    const localCarrinho = JSON.parse(localStorage.getItem("carrinho"));

    setCarrinho(localCarrinho);
  }, [refresh]);

  console.log("carrinho: ", carrinho);
  return (
    <>
      <Container>
        <Header carrinho={carrinho}></Header>

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
              quant={item.quant}
              removeProduct={removeProduct}
              addQuant={addQuant}
              minusQuant={minusQuant}
            />
          ))}
        </ShopContainer>
        <FinishBuy>
          <div>
            <h1>Valor total: </h1>
            <h1>R$ {total.toLocaleString("pt-br", {minimumFractionDigits: 2})}</h1>
          </div>
          <div>
            <ShopButton
              onClick={() => {
                setTotalValue(total);
                console.log("coleeee");
              }}
              hover={total > 0 ? "#d76b38" : "#808080"}
              background={total > 0 ? "#d76b38" : "#808080"}
              disabled={total > 0 ? false : true}
            >
              Finalizar Compra
            </ShopButton>
            <Link to="/">
              <ShopButton hover={"#c34167"} background={"#a2103b"}>
                Continuar Comprando
              </ShopButton>
            </Link>
          </div>
        </FinishBuy>
      </Container>
    </>
  );
}
