import { forwardRef } from "react";
import { useMyContext } from "../../context";
import "./index.css";

const ButtonFindCouples = forwardRef(function ({ buttonID, makeScroll }, ref) {
    const {
        men,
        women,
        menHaveChosen,
        womenHaveChosen,
        setResultText,
        setMatchesText,
        coupleSelected,
        setMatchesSearched,
        buttonsClicked,
        setButtonsClicked,
    } = useMyContext();

    const searchForCouples = () => {
        // RETURN CONDITIONS
        if (!menHaveChosen && !womenHaveChosen)
            return setResultText("No se eligieron parejas");

        if (!menHaveChosen)
            return setResultText("Los hombres no eligieron pareja");

        if (!womenHaveChosen)
            return setResultText("Las mujeres no eligieron pareja");

        if (men.length === 0 && women.length === 0)
            return setResultText("No hay usuarios");

        // Show message while searching for matches
        setResultText("Buscando matches...");

        let choosers = Object.keys(coupleSelected);
        let chosens = Object.values(coupleSelected);
        let thereAreCouples = false;

        // Search for couples
        setTimeout(() => {

            // Get the elections
            const addElections = () => {
                let matchesString = [];
                for (let i = 0; i < choosers.length; i++) {
                    matchesString.push(
                        `💘 ${choosers[i]} eligió a ${chosens[i]}`
                    );
                }

                // This will be render in the "Results" component
                return (
                    <div className="matches__text-container">
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

            // Show the elections
            const electionsResults = addElections();
            setMatchesText(electionsResults);

            // Get the matches
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
                            `💞 Hay match entre ${man.name} y ${coupleSelected[man.name]
                            } 💞`
                        );
                    }
                });

                return (
                    <div className="results__text-container">
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

            // Show the matches
            const matches = addMatches();
            setResultText(matches);

            setMatchesSearched(true);
        }, 3000);

        setButtonsClicked((prevState) => ({
            ...prevState,
            [buttonID]: true,
        }));
    };

    return (
        <button
            className={`ButtonFindCouples__button ${buttonsClicked[buttonID] && "buttonCliked"
                }`}
            onClick={() => {
                searchForCouples()
                makeScroll(ref.resultsRef)
            }}>
            Buscar matches
        </button>
    );
})

export { ButtonFindCouples };
