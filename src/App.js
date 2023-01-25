import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/signin" element={<SignInPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}
