import Header from "./components/Header"
import PreLoader from "./components/PreLoader"
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
    </main>
  
  </>
  )
}

export default App
