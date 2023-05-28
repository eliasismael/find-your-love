import { useState } from "react";
import { useMyContext } from "../../context";

import "./index.css";

function ButtonChooseCouple({ choosers, chosens, buttonID }) {
    const {
        men,
        women,
        menHaveChosen,
        setMenHaveChosen,
        womenHaveChosen,
        setWomenHaveChosen,
        setResultText,
        setCoupleSelected,
        buttonsClicked,
        setButtonsClicked,
    } = useMyContext();

    const chooseCouple = () => {
        if (menHaveChosen && womenHaveChosen)
            return setResultText("Ya se eligieron parejas");
        if (choosers === men && menHaveChosen)
            return setResultText("Los hombres ya eligieron pareja");
        if (choosers !== men && womenHaveChosen)
            return setResultText("Las mujeres ya eligieron pareja");
        if (!men.length) return setResultText("No hay hombres");
        if (!women.length) return setResultText("No hay mujeres");

        choosers.forEach((choser) => {
            const randomChosen =
                chosens[Math.floor(Math.random() * chosens.length)];

            setCoupleSelected((prevState) => ({
                ...prevState,
                [choser.name]: randomChosen.name,
            }));
        });

        if (choosers === men) {
            setMenHaveChosen(true);
        } else if (choosers === women) {
            setWomenHaveChosen(true);
        }

        setButtonsClicked((prevState) => ({
            ...prevState,
            [buttonID]: true,
        }));
    };

    return (
        <div className="ButtonChooseCouple">
            <button
                className={`ButtonChooseCouple__button ${
                    buttonsClicked[buttonID] && "buttonCliked"
                }`}
                onClick={chooseCouple}>
                Elegir pareja
            </button>
        </div>
    );
}

export { ButtonChooseCouple };
