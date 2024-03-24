import { Routes, Route } from "react-router-dom"
import './App.css'

//Import Pages
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

// Import Components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
