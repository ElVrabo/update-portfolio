import { useState } from "react"
import "./navigation.css"
import { Link } from "react-router-dom"
export default function Navigation(){
 
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
                <Link className="links">Facebook</Link>
            </div>
        </nav>
        </>
    )
}