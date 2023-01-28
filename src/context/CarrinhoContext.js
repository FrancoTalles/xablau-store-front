import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {

  const pegandoCarrinho = JSON.parse(localStorage.getItem("carrinho"));

  const [carrinho, setCarrinho] = useState(pegandoCarrinho ? pegandoCarrinho : []);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
