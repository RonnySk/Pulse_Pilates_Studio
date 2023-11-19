import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import PulsePilates from "./components/PulsePilates";
import Benefícios from "./components/Benefícios";
import CarouselImg from "./components/CarouselImg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <PulsePilates />
      <Benefícios />
      <CarouselImg />
      <Footer />
    </div>
  );
}

export default App;
