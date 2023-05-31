import { useMyContext } from "../../context";
import { ButtonResetElections } from "../ButtonResetElections";
import { forwardRef } from "react";

import "./index.css";


const Results = forwardRef(function ({ props }, ref) {
    const { resultText, matchesText, matchesSearched } = useMyContext();

    return (
        <div ref={ref}
            // className={matchesSearched ? "Results__container__visible" : "Results__container"}
            className="Results__container"
            matchesSearched={matchesSearched ? "true" : "false"}
        >
            <div
                className="Results__text"
                matchesSearched={matchesSearched ? "true" : "false"}
            >
                <div className="Results__matches">{matchesText}</div>
                <div className="Results__msg">{resultText}</div>
            </div>
            {matchesSearched && <ButtonResetElections />}
        </div>
    );
})

export { Results };
