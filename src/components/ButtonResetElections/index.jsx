import { useMyContext } from "../../context";
import "./index.css";
function ButtonResetElections() {
    const {
        setResultText,
        setMatchesText,
        setMenHaveChosen,
        setWomenHaveChosen,
        setCoupleSelected,
        setButtonsClicked,
        setMatchesSearched,
    } = useMyContext();

    const onClickHandle = () => {
        setResultText("");
        setMatchesText("");
        setMenHaveChosen(false);
        setWomenHaveChosen(false);
        setCoupleSelected({});
        setMatchesSearched(false);

        setButtonsClicked((prevState) => {
            const falsePorperties = Object.keys(prevState).reduce(
                (acc, propiedad) => {
                    acc[propiedad] = false;
                    return acc;
                },
                {}
            );

            return falsePorperties;
        });
    };

    return (
        <div className="ButtonResetElections__container">
            <button
                className="ButtonResetElections__button"
                onClick={onClickHandle}>
                Nueva selección
            </button>
        </div>
    );
}

export { ButtonResetElections };
