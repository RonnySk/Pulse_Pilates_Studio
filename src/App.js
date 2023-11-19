import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import PulsePilates from "./components/PulsePilates";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Pilates from "./components/Pilates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <PulsePilates />
      <Pilates />
    </div>
  );
}

export default App;
