import About from "./components/About/About";
import Hero from "./components/hero/hero";
import './App.css'
import Footer from "./components/Footer/footer";

import LatestArticles from "./components/LatestArticles/LatestArticles";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
