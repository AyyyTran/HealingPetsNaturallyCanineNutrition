import './App.css';
import Disclaimer from './Pages/Disclaimer';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <About></About>
      <Navbar></Navbar>
      <Disclaimer></Disclaimer>
      <Footer></Footer>
    </div>
  );
}

export default App;
