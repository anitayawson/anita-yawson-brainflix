import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
