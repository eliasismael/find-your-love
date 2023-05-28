import React from "react";
import { Menu } from "../components/Menu";
import { User } from "../components/User";
import { ButtonChooseCouple } from "../components/ButtonChooseCouple";
import { ButtonFindCouples } from "../components/ButtonFindCouples";
import { ButtonResetElections } from "../components/ButtonResetElections";
import { AddUser } from "../components/AddUser";
import { Results } from "../components/Results";
import { About } from "../components/About";
import { useState } from "react";
import { Contact } from "../components/Contact";

import { useMyContext } from "../context";
import { Footer } from "../components/Footer";

function AppUI() {
    const {
        men,
        women,
        textsForMen,
        textsForWomen,
        buttonsClicked,
        setButtonsClicked,
        // matchesSearched,
    } = useMyContext();

    return (
        <React.Fragment>
            <header>
                <h1>Find your love!</h1>
                <Menu />
            </header>

            <main>
                <section className="UsersSection">
                    {men.map((man) => (
                        <User
                            key={men.indexOf(man)}
                            index={men.indexOf(man)}
                            name={man.name}
                            src={man.src}
                            presentation={man.presentation}
                            textsForMen={textsForMen}
                        />
                    ))}
                </section>

                <ButtonChooseCouple
                    thisButtonClicked={buttonsClicked}
                    buttonID={"button1"}
                    setThisButtonClicked={setButtonsClicked}
                    choosers={men}
                    chosens={women}
                />

                <section className="UsersSection">
                    {women.map((woman) => (
                        <User
                            key={women.indexOf(woman)}
                            index={women.indexOf(woman)}
                            name={woman.name}
                            src={woman.src}
                            presentation={woman.presentation}
                            textsForWomen={textsForWomen}
                        />
                    ))}
                </section>

                <ButtonChooseCouple
                    thisButtonClicked={buttonsClicked}
                    buttonID={"button2"}
                    setThisButtonClicked={setButtonsClicked}
                    choosers={women}
                    chosens={men}
                />

                <ButtonFindCouples
                    thisButtonClicked={buttonsClicked}
                    buttonID={"button3"}
                    setThisButtonClicked={setButtonsClicked}
                />

                <section>
                    <Results />
                    {/* 
                    {matchesSearched && (
                        <ButtonResetElections
                            thisButtonClicked={buttonsClicked}
                            setThisButtonClicked={setButtonsClicked}
                        />
                    )} */}
                </section>

                <AddUser />

                <About />

                <Contact />
            </main>

            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default AppUI;
