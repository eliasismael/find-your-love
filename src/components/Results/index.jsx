import { useMyContext } from "../../context";
import "./index.css";
import { ButtonResetElections } from "../ButtonResetElections";

function Results() {
    const { resultText, matchesText, matchesSearched } = useMyContext();

    return (
        <div
            className="Results__container"
            matchesSearched={matchesSearched ? "true" : "false"}>
            <div
                className="Results__text"
                matchesSearched={matchesSearched ? "true" : "false"}>
                <div className="Results-matches">{matchesText}</div>
                <div className="Results-msg">{resultText}</div>
            </div>
            {matchesSearched && <ButtonResetElections />}
        </div>
    );
}
export { Results };
