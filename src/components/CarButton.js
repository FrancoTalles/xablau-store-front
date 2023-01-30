import { useContext } from "react";
import styled from "styled-components";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { StyledButton } from "./StyledButton";

export default function CarButton(props) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const { item } = props;
  const existe = carrinho.filter((obj) => obj.name === item.name);

  function insereCarrinho(item) {
    const existe = carrinho.filter((obj) => obj.name === item.name);
    if (existe.length !== 0) {
      return;
    }

    const newItem = {...item, quant: 1};
    const auxiliarCarrinho = [...carrinho, newItem];
    setCarrinho(auxiliarCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(auxiliarCarrinho));
  }

  return (
    <StyledCarButton
      onClick={() => insereCarrinho(item)}
      disabled={existe.length > 0 ? true : false}
    >
      {existe.length > 0 ? "Inserido" : "Carrinho"}
    </StyledCarButton>
  );
}

export const StyledCarButton = styled(StyledButton)`
  height: 4.31vh;
  width: 7.32vw;
  margin-right: 0.36vw;
  background-color: ${(props) =>
    props.disabled === false ? "#d76b38" : "#808080"};
  &:hover {
    background-color: ${(props) =>
      props.disabled === false ? "#db7c4e" : "#808080"};
  }
`;
