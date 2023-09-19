import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
