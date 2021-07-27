import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import "./css/App.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
