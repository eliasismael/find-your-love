import { useEffect, useState } from "react";
import { useMyContext } from "../../context";

import "./index2.css";

function User({
    index,
    name,
    src,
    alt,
    presentation,
    textsForMen,
    textsForWomen,
}) {
    const [finalPresentation, setFinalPresentation] = useState("");
    const [presentationIsVisible, setPresentationIsVisible] = useState(false);
    const { setMen, setWomen } = useMyContext();

    const createPresentation = () => {
        // Determinete if we must create a presentation for a men or women
        const texts = textsForMen ? textsForMen : textsForWomen;

        let presentation = "";
        for (const key in texts) {
            const array = texts[key];
            const randomIndex = Math.floor(Math.random() * array.length);
            presentation += array[randomIndex];
        }

        setFinalPresentation(presentation);
    };

    const deleteUser = () => {
        if (!textsForMen) {
            return setWomen((currentState) =>
                currentState.filter((_, i) => i !== index)
            );
        }

        if (!textsForWomen) {
            return setMen((currentState) =>
                currentState.filter((_, i) => i !== index)
            );
        }
    };

    // This is for avoid creating a new presentation each time the presentation become visible
    useEffect(() => {
        createPresentation();
    }, []);

    return (
        <div className="User">
            <img
                className="User__img"
                src={src}
                alt={`Imágen de ${name}`}
                onClick={() => setPresentationIsVisible(true)}
            />
            <h3 className="User__name">{name}</h3>

            {/* Add a modal to view each person's presentation  */}
            {presentationIsVisible && (
                <div className="modal">
                    <div className="modal__content">
                        <img src={src} alt={alt}></img>
                        <p className="modal__content__name">{name}</p>

                        <div className="modal__content__presentation-container">
                            <p className="modal__content__presentation">
                                {presentation || finalPresentation}
                            </p>
                        </div>

                        <div className="modal__buttons">
                            <button
                                className="modal__buttons__back"
                                onClick={() => setPresentationIsVisible(false)}>
                                Volver
                            </button>

                            <button
                                onClick={() => {
                                    deleteUser();
                                    setPresentationIsVisible(false);
                                }}
                                className="modal__buttons__delete"
                                id="delete">
                                {/* ✘ */}
                                Borrar usuario
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export { User };
