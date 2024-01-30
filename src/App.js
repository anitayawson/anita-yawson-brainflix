import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./pages/MainVideo/MainVideo";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainVideo />} />
        <Route path="/videos/:videoId" element={<MainVideo />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
=======
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVideo />} />
          <Route path="/videos/:videoId" element={<MainVideo />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </main>
>>>>>>> feature/clean-ui
  );
}

export default App;
