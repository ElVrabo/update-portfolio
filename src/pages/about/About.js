import "./about.css"
import Navigation from "../../components/navigation/Navigation";
import iconReact from "../../assets/images/icons8-reaccionar-80.png"
import iconBootstrap from "../../assets/images/icons8-oreja-48.png"
import iconJS from "../../assets/images/icons8-javascript-48.png"
import iconHTML from "../../assets/images/icons8-html-48.png"
import iconGitHub from "../../assets/images/icons8-github-48.png"
import iconGit from "../../assets/images/icons8-git-48.png"
import iconCSS from "../../assets/images/icons8-css-48.png"
import { useState } from "react";

export default function About(){
    const[listEducation,setListEducation] = useState([
     'Tecnico superior universitario en Desarrollo de Software Multiplataforma en UTT',
     'Ingeniero en Desarrollo y Gestion de Software',
     'Eterno autodidacta'
    ])
    return (
        <>
        <Navigation/>
        <section className="about" >
            <h1>Sobre mi</h1>
            <p>Disfruto desarrollar interfaces atractivas usando las tecnologias adecuadas, asi como tambien la optimizacion para que un sitio web sea fieble y usable.</p>
            <p>Disfruto desarrollar interfaces de usuario para sistemas usando las tecnologias adecuadas,
               asi como tambien la optimizacion para la buena carga del sitio web.
               Empeze en este mundo por el gusto a lo simple y atractivo de las cosa a traves del codigo. He trabajado en distintos proyectos para sumar experiencia. Desde sitios web informativos hasta tiendas en linea. Cada dia estoy en contante conocimiento. </p>
        </section>
        <hr/>
        <section className="abilities" >
            <h1>Mis habilidades</h1>
            <div className="gallery" >
                <img src={iconReact} />
                <img src={iconJS} />
                <img src={iconHTML} />
                <img src={iconGitHub}/>
                <img src={iconGit} />
                <img src={iconCSS} />
                <img src={iconBootstrap} />
            </div>
        </section>
        <hr/>
        <section className="education" >
            <h1>Mi educacion</h1>
            <div className="list-education" >
                <ul>
                    {listEducation.map((i)=>(
                        <li>{i}</li>
                    ))}
                </ul>
            </div>
        </section>
        <p style={{"textAlign":"center", "color":"#f4f2ee", "marginTop":"90px","fontSize":"17px"}} >Desarrollado por Brandon Muñoz ©️ 2024.</p>
        </>
    )
}