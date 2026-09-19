import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Videos from "./components/Videos";
import Setup from "./components/Setup";
import Tips from "./components/Tips";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Videos />
      <Setup />
      <Tips />
      <Instagram />
      <Footer />
    </>
  );
}

export default App;
