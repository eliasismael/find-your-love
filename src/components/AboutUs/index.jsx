import React, { useState, forwardRef } from "react";
import "./index.css";

const AboutUs = forwardRef(function (props, ref) {
    // const aboutRef = useRef(null);
    const [visible, setVisible] = useState(true);

    return (
        <div ref={ref}>
            <div className="tittle-container">
                <h2 className="tittle">Sobre nosotros</h2>
            </div>

            {visible && (
                <div className="text-container">
                    <p>
                        ¡Bienvenidos a Find your love! Estamos dedicados a
                        ayudar a personas solteras a encontrar a su pareja
                        ideal. Nuestra plataforma es fácil de usar y está
                        diseñada para ayudar a los solteros a conectarse con
                        otros solteros que compartan intereses y valores
                        similares.
                    </p>

                    <br />

                    <p>
                        Nuestro enfoque es único, en lugar de simplemente
                        emparejar personas basándonos en su ubicación y
                        preferencias físicas, también consideramos sus
                        intereses, pasatiempos y valores para crear conexiones
                        más significativas. Creemos que estas características
                        pueden ser una base sólida para construir relaciones a
                        largo plazo y duraderas.
                    </p>

                    <br />

                    <p>
                        En nuestra página de citas en línea, te ofrecemos una
                        experiencia segura y amigable para conocer a otras
                        personas solteras. Puedes filtrar tus resultados de
                        búsqueda para encontrar personas que se adapten a tus
                        preferencias y puedes enviar mensajes y chatear con
                        ellos para conocerlos mejor.
                    </p>

                    <br />

                    <p>
                        Estamos comprometidos a ayudarte a encontrar el amor y
                        estamos seguros de que con nuestra ayuda, puedes
                        encontrar a la persona adecuada para ti. ¡Únete a
                        nuestra comunidad hoy y comienza tu viaje hacia una
                        relación feliz y duradera!
                    </p>
                </div>
            )}
        </div>
    );
})

export { AboutUs };
