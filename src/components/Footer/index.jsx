import React from "react";
import "./index.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="Footer__content">

                <div className="Footer__section">
                    <h3 className="Footer__section__tittle">Trabajá con nosotros:</h3>
                    <p className="Footer__section__text">
                        Teléfono: (123) 456-1402
                        <br />
                        Correo electrónico: info@findyourlove.com
                    </p>
                </div>

                <div className="Footer__section">
                    <h3 className="Footer__section__tittle" >Auspiciantes:</h3>
                    <p className="Footer__section__text">Agradecemos a nuestros auspiciantes por su apoyo:</p>
                    <p className="Footer__section__text"> <p>Best Auspiciant | Solow investment | Takoto Group</p></p>
                </div>
            </div>

            <div className="Footer__bottom">
                <p className="Footer__bottom__text">© {currentYear} Find your love. Todos los derechos reservados.</p>
                <p className="Footer__bottom__text"> Desarrollado por: Elías Pereyra</p>
            </div>
        </footer >
    );
};

export { Footer };
