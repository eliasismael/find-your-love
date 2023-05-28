import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./index.css";
import "./transitions.css";

const Menu = forwardRef(function Menu({ makeScroll }, ref) {
    const [modalVisible, setModalVisible] = useState(false);
    const menuModalRef = useRef(null);

    const onClickHandle = () => {
        if (menuModalRef.current.style.display === "none") {
            menuModalRef.current.style.display = "";
        }

        setModalVisible(!modalVisible);

    }

    useEffect(() => {
        menuModalRef.current.style.display = "none";
    }, []);

    return (
        <div>
            <div className="Menu" onClick={onClickHandle}>
                Menu
            </div>

            <CSSTransition
                in={modalVisible}
                classNames={"fade"}
                timeout={500}>
                <div className="Menu__modal" ref={menuModalRef}>
                    <ul>
                        <li onClick={() => makeScroll(ref.aboutUsRef)}>
                            {/* <Link to="/about">Sobre nosotros</Link> */}
                            Sobre nosotros
                        </li>

                        <li onClick={() => makeScroll(ref.contactRef)}>
                            {/* <Link to="/contact">Contacto</Link> */}
                            Contacto
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
}
)
export { Menu };
