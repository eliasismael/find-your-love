import { useState, useRef } from "react";
import "./index.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        // a la empresa o procesar los datos de alguna manera
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // También puedes reiniciar los campos del formulario si es necesario
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div ref={contactRef} className="super-main-container">
            <div className="main-container">
                <div className="text">
                    <h3>Contáctanos!</h3>
                    <p className="text__main-text">
                        Nos encantaría saber de ti y responder cualquier
                        pregunta o inquietud que puedas tener sobre nuestro
                        servicio de emparejamiento. Puedes comunicarte con
                        nosotros a través de los siguientes medios:
                    </p>
                    <br />
                    <p className="text__item">
                        <span> Correo electrónico:</span> envíanos un correo
                        electrónico a contacto@findyourlove.com y te
                        responderemos lo antes posible
                    </p>
                    <br />
                    <p className="text__item">
                        <span>Formulario de contacto:</span> utiliza nuestro
                        formulario de contacto en línea para enviarnos un
                        mensaje directamente desde nuestra página.
                    </p>
                    <br />
                    <p className="text__item">
                        <span>Redes sociales:</span> encuéntranos en Instagram y
                        Twitter como @findyourlove y envíanos un mensaje directo
                        con tu pregunta o inquietud.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Mensaje::</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <br />

            <div className="closing-text">
                <p className="closing-text__p">
                    Nos tomamos muy en serio tus comentarios y sugerencias, por
                    lo que agradecemos cualquier comentario que nos ayude a
                    mejorar nuestro servicio. Si tienes alguna sugerencia o
                    idea, no dudes en compartirla con nosotros.
                </p>

                <br />

                <p className="closing-text__p">
                    Gracias por elegir nuestro servicio de emparejamiento.
                    ¡Esperamos escuchar de ti pronto!
                </p>
            </div>
        </div>
    );
}

export { Contact };
