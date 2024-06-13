import { useState } from "react"
import "./navigation.css"
import { Link, useNavigate } from "react-router-dom"
import iconGitHub from "./../../assets/images/github.png"
import iconLinkedin from "./../../assets/images/linkedin.png"
import iconFacebook from "./../../assets/images/facebook.png"
export default function Navigation(){

    const navigate = useNavigate()
 
    const [items,setItems] = useState([
        
        '/Inicio',
        '/Proyectos',
        '/Contacto'

    ])

    return (
        <>
        <nav className="navigation" >
            <div className="myself" >
                <Link to="/" className="name" > Brandon Muñoz</Link>
            </div>
            <div className="items" >
                {items.map((i)=>(
                    <Link to={i} className="links">{i.slice(1)}</Link>
                ))}
            </div>
            <div className="social-media">
                <img src={iconGitHub} alt="icono github" onClick={()=>{
                    window.open('https://github.com/ElVrabo')
                }} />
                <img src={iconLinkedin} alt="icono linkedin" onClick={()=>{
                    window.open('https://www.linkedin.com/in/brandon-mu%C3%B1oz-mazariegos-a1b77226a/')
                }} />
                <img src={iconFacebook} alt="icono facebook" onClick={()=>{
                    window.open('https://www.facebook.com/profile.php?id=100032566212527')
                }} />
            </div>
        </nav>
        </>
    )
}