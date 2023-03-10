import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Omocard from "./components/Omocard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import BoardList from "./pages/Board/BoardList";
import NewNav from "./components/NewNav";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* <NewNav /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/board" element={<BoardList />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </main>
  );
}
