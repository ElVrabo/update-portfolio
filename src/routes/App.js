import "../index.css"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"


const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Inicio" element={<About/>} />
        </Routes>
    )
}

export default App