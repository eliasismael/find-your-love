import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./index.css";
import "./transitions.css";

function Menu() {
    const [modalVisible, setModalVisible] = useState(false);
    const menuModalRef = useRef(null);

    const onClickHandle = () => {
        if (menuModalRef.current.style.display === "none") {
            menuModalRef.current.style.display = "";
        }

        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        menuModalRef.current.style.display = "none";
    }, []);

    return (
        <>
            <div>
                <div className="Menu" onClick={onClickHandle}>
                    Menu
                </div>

                <CSSTransition
                    in={modalVisible}
                    classNames={"fade"}
                    // appear={true}
                    timeout={500}>
                    <div className="Menu__modal" ref={menuModalRef}>
                        <ul>
                            <li>
                                <Link to="/about">Sobre nosotros</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </CSSTransition>
            </div>
        </>
    );
}

export { Menu };
