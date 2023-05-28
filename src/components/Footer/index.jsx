import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h3>Trabajá con nosotros:</h3>
                    <p>
                        Teléfono: (123) 456-1402
                        <br />
                        Correo electrónico: info@findyourlove.com
                    </p>
                </div>
                <div className="footer__section">
                    <h3>Auspiciantes</h3>
                    <p>
                        Agradecemos a nuestros auspiciantes por su apoyo:
                        <br />
                        Best Auspiciant
                        <br />
                        4ever WithU
                        <br />
                        Solow investment
                    </p>
                </div>
            </div>
            <div className="footer__bottom">
                <p>
                    © {currentYear} Find your love. Todos los derechos
                    reservados.
                </p>
                <p>Desarrollado por: Elías Pereyra</p>
            </div>
        </footer>
    );
};

export { Footer };
