import Header from "../../components/Header/Header";
import {
  AdDiv,
  DivButtons,
  DivDetails,
  HomeStyle,
  Imagem,
  MainDiv,
  Produto,
  StyledButtonHome,
} from "./styled";
// import PcGamer from "../../assets/PcGamer.jpg"
import PcGamer from "../../assets/PcGamer.jpg";
import Gamer from "../../assets/Gamer.jpg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../context/CarrinhoContext";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function insereCarrinho(item) {
    const auxiliarCarrinho = [...carrinho, item];
    console.log(auxiliarCarrinho);
    setCarrinho(auxiliarCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(auxiliarCarrinho));
  }

  function compraDireta(item) {
    const auxiliarCarrinho = [...carrinho, item];
    setCarrinho(auxiliarCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(auxiliarCarrinho));
    // navigate("/checkout");
    // Comentei o navigate para quando tu fizer a tela de checkout Daniel
  }

  useEffect(() => {
    const promise = axios.get(`https://xablaustore-api.onrender.com/home`);
    promise.then((res) => {
      setProducts(res.data);
    });

    promise.catch((error) => {
      console.log(error);
      alert("Não foi possível acessar o servidor, tente novamente mais tarde");
    });
  }, []);
  return (
    <>
      <Header carrinho={carrinho}></Header>
      <HomeStyle background={PcGamer}>
        <AdDiv>
          <img src={Gamer} alt="Imagem" />
        </AdDiv>
        <MainDiv>
          {products?.map((item, index) => (
            <Produto key={index}>
              <Imagem src={item.image} alt="Imagem" />
              <DivDetails>
                <h1>{item.name.slice(0, 18) + "..."}</h1>
                <h2>R$ {item.price.toFixed(2).replace(".", ",")}</h2>
                <p>Em Estoque</p>
              </DivDetails>
              <DivButtons>
                <StyledButtonHome
                  hover={"#db7c4e"}
                  background={"#d76b38"}
                  onClick={() => insereCarrinho(item)}
                >
                  Carrinho
                </StyledButtonHome>
                <StyledButtonHome
                  hover={"#c34167"}
                  background={"#a2103b"}
                  onClick={() => compraDireta(item)}
                >
                  Comprar
                </StyledButtonHome>
              </DivButtons>
            </Produto>
          ))}
        </MainDiv>
      </HomeStyle>
    </>
  );
}
