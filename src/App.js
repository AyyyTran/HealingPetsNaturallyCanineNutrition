import './App.css';
import Disclaimer from './Pages/Disclaimer';
import Navbar from './Pages/Navbar';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <About></About>
      <Navbar></Navbar>
      <Disclaimer></Disclaimer>
    </div>
  );
}

export default App;
