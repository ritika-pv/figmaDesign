import About from "./components/About/About";
import Hero from "./components/hero/hero";
import './App.css'
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
