import './App.css';
import Disclaimer from './Pages/Disclaimer';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Certifications from './Pages/Certifications';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Certifications></Certifications>
      <Services></Services>
      <Disclaimer></Disclaimer>
      <Footer></Footer>
    </div>
  );
}

export default App;
