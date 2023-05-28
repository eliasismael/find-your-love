import { useEffect, useState } from "react";
import { useMyContext } from "../../context";
import "./index.css";

function ButtonFindCouples({ buttonID }) {
    const {
        men,
        women,
        menHaveChosen,
        womenHaveChosen,
        resultText,
        setResultText,
        setMatchesText,
        coupleSelected,
        setMatchesSearched,
        buttonsClicked,
        setButtonsClicked,
    } = useMyContext();

    const searchForCouples = () => {
        // RETURN CONDITIONS

        if (!menHaveChosen && !womenHaveChosen) {
            return setResultText("No se eligieron parejas");
        }

        if (!menHaveChosen) {
            return setResultText("Los hombres no eligieron pareja");
        }

        if (!womenHaveChosen) {
            return setResultText("Las mujeres no eligieron pareja");
        }

        if (men.length === 0 && women.length === 0) {
            return setResultText("No hay usuarios");
        }

        // Show message while searching for matches
        setResultText("Buscando matches...");

        let choosers = Object.keys(coupleSelected);
        let chosens = Object.values(coupleSelected);
        let thereAreCouples = false;

        setTimeout(() => {
            // Show which person each chose
            const addElections = () => {
                let matchesString = [];
                for (let i = 0; i < choosers.length; i++) {
                    matchesString.push(
                        `💘 ${choosers[i]} eligió a ${chosens[i]}`
                    );
                }

                return (
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            {matchesString.map((e) => {
                                return (
                                    <li key={`${matchesString.indexOf(e)}`}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            };

            const electionsResults = addElections();
            setMatchesText(electionsResults);

            const addMatches = () => {
                let resultString = [];
                men.forEach((man) => {
                    /* If "Marcos" is the key for "Ana"...
                            person.name = "Marcos"
                            - coupleSelected[person.name] === "Ana"

                        ...we verify if "Ana" is the key for "Marcos":
                            - coupleSelected[ coupleSelected[person.name] ] === "Marcos"

                        Notice that do that would be the same thing as doing this:
                            - coupleSelected[ "Ana" ] === "Marcos" */

                    if (man.name === coupleSelected[coupleSelected[man.name]]) {
                        thereAreCouples = true;
                        resultString.push(
                            `💞 Hay match entre ${man.name} y ${
                                coupleSelected[man.name]
                            } 💞`
                        );
                    }
                });

                return (
                    <div>
                        {thereAreCouples && (
                            <ul>
                                {resultString.map((e) => {
                                    return (
                                        <li key={`${resultString.indexOf(e)}`}>
                                            {e}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {!thereAreCouples && (
                            <ul>
                                <li>No hay matches 💔</li>
                            </ul>
                        )}
                    </div>
                );
            };

            const matches = addMatches();
            setResultText(matches);
            setMatchesSearched(true);
        }, 3000);

        setButtonsClicked((prevState) => ({
            ...prevState,
            [buttonID]: true,
        }));
    };

    useEffect(() => {
        const componenteDestino = document.querySelector(".Results__container");
        componenteDestino.scrollIntoView({ behavior: "smooth" });
    }, [resultText]);

    return (
        <button
            className={`ButtonFindCouples__button ${
                buttonsClicked[buttonID] && "buttonCliked"
            }`}
            onClick={searchForCouples}>
            Buscar matches
        </button>
    );
}

export { ButtonFindCouples };
