import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { StyledButton } from "./StyledButton";

export default function PurchaseButton(props) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const { item } = props;
  const navigate = useNavigate();

  function compraDireta(item) {
    const existe = carrinho.filter((obj) => obj.name === item.name);
    if (existe.length !== 0) {
      navigate("/checkout");
      return;
    }

    const newItem = {...item, quant: 1};
    const auxiliarCarrinho = [...carrinho, newItem];
    setCarrinho(auxiliarCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(auxiliarCarrinho));
    navigate("/checkout");
  }
  return (
    <StyledPurchaseButton onClick={() => compraDireta(item)}>
      Comprar
    </StyledPurchaseButton>
  );
}

export const StyledPurchaseButton = styled(StyledButton)`
  height: 4.31vh;
  width: 7.32vw;
  margin-left: 0.43vw;
  background-color: ${"#a2103b"};
  &:hover {
    background-color: ${"#c34167"};
  }
`;
