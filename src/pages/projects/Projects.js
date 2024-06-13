import Navigation from "../../components/navigation/Navigation"
import "./projects.css"
import imageFurniture from "../../assets/images/image-muebleria.png"
import imageClimb from "../../assets/images/image-clima.png"
import CardProjects from "./CardProjects"
export default function Projects(){
    return (
        <>
        <Navigation/>
        <section className="projects" >
        <h1 >Mis proyectos</h1>
        <div className="card-projects" >
            <CardProjects 
            title='Administrador de productos'
            description='Desarrollo de la interfaz de usuario de un sistema de administracion de productos,
            implementando rutas, colores y mejorando el rendimiento del responsive design, ademas de
            implementar la logica para enviar los datos al backend. En este proyecto se utilizaron
            tecnologias como: RaactJS,CSS, GitHub y Axios para peticiones al backend.'
            image={imageFurniture}
             />
             <CardProjects
             title='Aplicacion del clima'
             description='Desarrollo de un aplicacion para consultar el clima de cualquier parte del
             mundo, se uso la api OpenWeather y se hicieron consultas a la misma. Se utilizaron
             tecnologias como: HTML,CSS,JavaScript,GitHub y Axios para las peticiones a la API.' 
             image={imageClimb}            
             />
        </div>
        </section>
        <p style={{"textAlign":"center", "color":"#f4f2ee", "marginTop":"90px","fontSize":"17px"}} >Desarrollado por Brandon Muñoz ©️ 2024.</p>
        </>
    )
}