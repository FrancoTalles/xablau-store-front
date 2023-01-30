import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarrinhoProvider from "./context/CarrinhoContext";
import UserProvider from "./context/UserContext";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import HomePage from "./pages/HomePage/HomePage";
import ShopListPage from "./pages/ShopListPage/ShopListPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<ShopListPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/checkout" element={<CheckOutPage/>} />
          </Routes>
        </UserProvider>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}
