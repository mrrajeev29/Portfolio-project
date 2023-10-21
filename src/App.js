import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/Intro/intro"
import NavBar from "./components/NavBar/Nav"
import About from './components/About/about';
import Service from './components/Service/service';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Copyright from './components/Copyright/copyright';
function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <About/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <Copyright/>
    </>
  );
}

export default App;