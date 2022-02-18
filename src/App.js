import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* COMPONENTS */
import ExploreSolutions from "./components/ExploreSolutions";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form";
import Autoplay from "./components/HeaderCarousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Autoplay />
        <ExploreSolutions />
        <AboutUs />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
