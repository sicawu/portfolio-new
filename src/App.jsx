import { Routes, Route } from "react-router-dom"
import './App.css'

//Import Pages
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import WorkPage from "./pages/WorkPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

// Import Components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

// Import library for SEO
import { Helmet } from 'react-helmet'


function App() {

  return (
    <>
      <Helmet>
        <title>Simona Wurst | Web Development & SEO Specialist</title>
        <meta name="description" content="Fullstack Web Dev with SEO background ✓ frontend & backend ✓ working remote & world-wide ✓ let's create together!" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
