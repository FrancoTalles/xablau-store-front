import { Link } from "react-router-dom";
import { HeaderStyle, LogoDivStyle } from "./styled";
import logo from "../../assets/logo_xablau.png";
export default function Header(props) {
  return (
    <HeaderStyle>
      <img src={logo} alt="Xablau Store" />
      <LogoDivStyle>
        <h1>{props.carrinho?.length}</h1>
        <Link to="/carrinho">
          <ion-icon name="cart"></ion-icon>
        </Link>
        <Link to="/signin">
          <ion-icon name="log-out"></ion-icon>
        </Link>
      </LogoDivStyle>
    </HeaderStyle>
  );
}
