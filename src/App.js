import About from "./components/About/About";
import Hero from "./components/hero/hero";
import './App.css'
import Footer from "./components/Footer/footer";
import FoodCard from "./components/foodCards/FoodCard";

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <FoodCard/>
      <Footer/>
    </div>
  );
}

export default App;
