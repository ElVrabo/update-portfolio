import "./contact.css"
import Navigation from "../../components/navigation/Navigation"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact(){

    const form = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID_EMAIL, process.env.REACT_APP_TEMPLATE_ID_EMAIL, form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY_EMAIL,
              })
         form.current.user_name.value=''
         form.current.user_email.value=''
         form.current.message.value=''

        } catch (error) {
            
        }
    
      };
    return (
        <>
        <Navigation/>
        <section className="container-contact">
            <h1>Contactame</h1>
            <form ref={form} onSubmit={sendEmail} className="form-contact">
                <label htmlFor="user_name">Nombre</label>
                <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required />

                <label htmlFor="user_email">Correo Electrónico</label>
                <input type="email" id="user_email" name="user_email" placeholder="Tu correo electrónico" required />

                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" placeholder="Tu mensaje" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
        <p style={{"textAlign":"center", "color":"#f4f2ee", "marginTop":"90px","fontSize":"17px"}} >Desarrollado por Brandon Muñoz ©️ 2024.</p>
    </>
    )
}