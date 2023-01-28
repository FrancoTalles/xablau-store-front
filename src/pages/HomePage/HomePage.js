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
import { useEffect, useState } from "react";
import axios from "axios";


export default function HomePage() {
  const teste = [
    {
      name: "MP3 PLAYER",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
    {
      name: "Mp3 Player Com Fone",
      price: 150.55,
      image:
        "https://img.freepik.com/premium-psd/rose-gold-3d-media-player-mockup_106244-1749.jpg?w=740",
      description: "Mp3 player Muito Bom",
      category: "Eletronic Device",
    },
  ];

  const [products, setProducts] = useState([])

  useEffect(() => {
      const promise = axios.get(`https://xablaustore-api.onrender.com/home`);
      promise.then((res) => {
        console.log(res.data);
        setProducts(res.data)
      })

      promise.catch((error) => {
        console.log(error);
        alert("Não foi possível acessar o servidor, tente novamente mais tarde")
      })
  }, [])
  return (
    <>
      <Header></Header>
      <HomeStyle background={PcGamer}>
        <AdDiv>
          <img src={Gamer}/>
        </AdDiv>
        <MainDiv>
          {teste?.map((item, index) => (
            <Produto key={index}>
              <Imagem src={item.image} alt="Imagem" />
              <DivDetails>
                <h1>{item.name.slice(0, 17)}</h1>
                <h2>R$ {item.price.toFixed(2).replace(".", ",")}</h2>
                <p>Em Estoque</p>
              </DivDetails>
              <DivButtons>
                <StyledButtonHome hover={"#db7c4e"} background={"#d76b38"}>
                  Carrinho
                </StyledButtonHome>
                <StyledButtonHome hover={"#c34167"} background={"#a2103b"}>
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
