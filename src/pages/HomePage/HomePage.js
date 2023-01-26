import Header from "../../components/Header/Header";
import { AdDiv, HomeStyle, mainDiv } from "./styled";
import PcGamer from "../../assets/PcGamer.jpg"

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <HomeStyle background={PcGamer}>
        <AdDiv></AdDiv>
        <mainDiv></mainDiv>
      </HomeStyle>
    </>
  );
}
