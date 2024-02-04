import './App.css';
import Disclaimer from './Pages/Disclaimer';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Certifications from './Pages/Certifications';
import Services from './Pages/Services';
import Info from './Pages/Info';
import Plans from './Pages/Plans';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Certifications></Certifications>
      <Info></Info>
      <Services></Services>
      <Plans></Plans>
      <Reviews></Reviews>
      <Contact></Contact>
      <Disclaimer></Disclaimer>
      <Footer></Footer>
    </div>
  );
}

export default App;
