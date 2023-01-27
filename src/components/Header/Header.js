import { Link } from "react-router-dom";
import { HeaderStyle, LogoDivStyle } from "./styled";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>Xablau Store</h1>
      <LogoDivStyle>
        <Link>
          <ion-icon name="cart"></ion-icon>
        </Link>
        <Link to="/signin">
          <ion-icon name="log-out"></ion-icon>
        </Link>
      </LogoDivStyle>
    </HeaderStyle>
  );
}
