import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/destinations" element = {<Destinations />} />
                <Route path="/about" element = {<About />} />
                <Route path="/contact" element = {<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
