import CardSlider from "./components/CardSlider"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {

  return (
    <main className="overflow-x-hidden">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <CardSlider/>
      <Footer/>
    </main>
  )
}

export default App
