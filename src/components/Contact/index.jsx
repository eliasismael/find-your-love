import { useState, useRef, forwardRef } from "react";
import "./index.css";

const Contact = forwardRef(function Contact(props, ref) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="main-container" ref={ref}>
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
    );
})

export { Contact };
