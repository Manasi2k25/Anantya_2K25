import "./App.css";
import HomePage from "./components/home/home2/Homepage";
import Navbar from "./components/home/navbar/navbar";
import Footer from "./components/home/footer/footer";
import { EventPage } from "./components/events page/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from './components/gallery/GalleryPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
