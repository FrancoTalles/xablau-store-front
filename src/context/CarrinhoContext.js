import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
  const pegandoCarrinho = JSON.parse(localStorage.getItem("carrinho"));

  const [carrinho, setCarrinho] = useState(
    pegandoCarrinho ? pegandoCarrinho : []
  );
  const [totalValue, setTotalValue] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, setCarrinho, totalValue, setTotalValue }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
