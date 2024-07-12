import ContactForm from "./components/ContactForm"
import Header from "./components/Header"
import PreLoader from "./components/PreLoader"
import Slider from "./components/Slider"
import SplitImage from "./components/SplitImage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


function App() {


  return (
  <>
    <PreLoader/>
    <main>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <ContactForm/>
      <Slider/>
      <SplitImage src="src/assets/img1.jpg" alt="Description of the image" />
    </main>
  
  </>
  )
}

export default App
