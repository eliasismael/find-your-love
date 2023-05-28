import { useMyContext } from "../../context";
import { useState, useRef } from "react";
import "./index.css";

function AddUser() {
    const { men, women, setMen, setWomen, menHaveChosen, womenHaveChosen } =
        useMyContext();

    const [addingUser, setAddingUser] = useState(false);

    const name = useRef(null);
    const img = useRef(null);
    const gender = useRef(null);
    const presentation = useRef(null);

    const [typedCharacters, setTypedCharacters] = useState(0);
    const PRESENTATION_MAX_LENGTH = 500;

    const onClickHandle = () => setAddingUser(!addingUser);

    const addPerson = () => {
        // RETURN CONDITIONS
        if (!img.current.files[0]) {
            return alert("Añade una imágen");
        }
        if (!name.current.value) {
            return alert("Añade un nombre");
        }
        if (Array.from(name.current.value).every((char) => char === " ")) {
            return alert("Añade un nombre válido");
        }
        if (
            men.some(
                (element) => element.name === String(name.current.value)
            ) ||
            women.some((element) => element.name === String(name.current.value))
        ) {
            return alert("Esa persona ya fue añadida");
        }

        // PROCESS THE DATA
        const file = img.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load", () => {
            const newUser = {
                name: name.current.value,
                src: reader.result,
                presentation: presentation.current.value,
            };

            if (gender.current.value === "Masculino") {
                setMen((currentValue) => [...currentValue, newUser]);
            } else if (gender.current.value === "Femenino") {
                setWomen((currentValue) => [...currentValue, newUser]);
            }
        });
    };

    return (
        <div>
            <button
                className={
                    menHaveChosen || womenHaveChosen
                        ? "AddUser__button__disabled"
                        : "AddUser__button"
                }
                disabled={menHaveChosen || womenHaveChosen}
                onClick={onClickHandle}>
                <span>+</span>
            </button>

            {addingUser && (
                <div className="Add-user__modal">
                    <div className="Add-user__modal__content">
                        <form className="Add-user__modal__content__form">
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                ref={name}
                                placeholder="Nombre de la persona"
                            />

                            <label htmlFor="user-img">Imágen:</label>
                            <input type="file" ref={img} placeholder="Hola" />

                            <label htmlFor="gender">Género:</label>

                            <select ref={gender}>
                                <option value={"Masculino"}>Masculino</option>
                                <option value={"Femenino"}>Femenino</option>
                            </select>

                            <label htmlFor="presentation">Presentación:</label>
                            <textarea
                                ref={presentation}
                                // className="presentation"
                                placeholder="Añade una presnetación"
                                maxLength={PRESENTATION_MAX_LENGTH}
                                onChange={() =>
                                    setTypedCharacters(
                                        presentation.current.textLength
                                    )
                                }></textarea>

                            <span>{`${typedCharacters}/${PRESENTATION_MAX_LENGTH}`}</span>

                            <div className="Add-user__modal__content__buttons">
                                <button
                                    className="btn__add-person"
                                    type="submit"
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        setTypedCharacters(0);
                                        addPerson();
                                    }}>
                                    Añadir persona
                                </button>

                                <button
                                    onClick={() => {
                                        onClickHandle(), setTypedCharacters(0);
                                    }}>
                                    Volver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export { AddUser };
