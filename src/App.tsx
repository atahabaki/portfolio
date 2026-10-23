import "./App.css";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Memorial from "./components/Memorial/Memorial";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Memorial />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
