import "../index.css"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects"
import Contact from "../pages/contact/Contact"


const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Inicio" element={<About/>} />
            <Route path="/Proyectos" element={<Projects/>} />
            <Route path="/Contacto" element={<Contact/>} />
        </Routes>
    )
}

export default App