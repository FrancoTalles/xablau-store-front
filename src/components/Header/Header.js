import { Link } from "react-router-dom";
import { HeaderStyle, LogoDivStyle } from "./styled";
import logo from "../../assets/logo_xablau.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CarrinhoContext } from "../../context/CarrinhoContext";

export default function Header(props) {
  const { user } = useContext(UserContext);
  const {setCarrinho} = useContext(CarrinhoContext);
  
  function handleLogout(){
    localStorage.removeItem("user");
    setCarrinho([]);
    localStorage.setItem("carrinho", JSON.stringify([]));
  }
  
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Xablau Store" />
      </Link>
      <LogoDivStyle>
        <h1>{props.carrinho?.length}</h1>
        <Link to="/carrinho">
          <ion-icon name="cart"></ion-icon>
        </Link>
        <Link to="/signin">
          {JSON.stringify(user) === "{}" ? (
            <ion-icon  name="person"></ion-icon>
          ) : (
            <ion-icon name="log-out" onClick={handleLogout}></ion-icon>
          )}
        </Link>
      </LogoDivStyle>
    </HeaderStyle>
  );
}
