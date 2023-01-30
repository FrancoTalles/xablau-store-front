import Header from "../../components/Header/Header";
import {
  AdDiv,
  DivButtons,
  DivDetails,
  HomeStyle,
  Imagem,
  MainDiv,
  Produto,
} from "./styled";
// import PcGamer from "../../assets/PcGamer.jpg"
import ad from "../../assets/ad.jpg"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import CarButton from "../../components/CarButton";
import PurchaseButton from "../../components/PurchaseButton";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { carrinho } = useContext(CarrinhoContext);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`);
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
      <HomeStyle>
        <AdDiv>
          <img src={ad} alt="Imagem" />
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
                <CarButton item={item} />
                <PurchaseButton item={item} />
              </DivButtons>
            </Produto>
          ))}
        </MainDiv>
      </HomeStyle>
    </>
  );
}
