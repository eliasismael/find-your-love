import React from "react";
import "./index.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <div className="Footer__content">

                <div className="Footer__section">
                    <h3>Trabajá con nosotros:</h3>
                    <p>
                        Teléfono: (123) 456-1402
                        <br />
                        Correo electrónico: info@findyourlove.com
                    </p>
                </div>

                <div className="Footer__section">
                    <h3>Auspiciantes:</h3>
                    <p>Agradecemos a nuestros auspiciantes por su apoyo:</p>
                    <p className="auspiciants">Best Auspiciant | Solow investment | Takoto Group</p>
                </div>
            </div>

            <div className="Footer__bottom">
                <p>© {currentYear} Find your love. Todos los derechos reservados.</p>
                <p> Desarrollado por: Elías Pereyra</p>
            </div>
        </footer >
    );
};

export { Footer };
