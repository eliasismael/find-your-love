import React, { useRef } from "react";
import { Menu } from "../components/Menu";
import { User } from "../components/User";
import { ButtonChooseCouple } from "../components/ButtonChooseCouple";
import { ButtonFindCouples } from "../components/ButtonFindCouples";
import { AddUser } from "../components/AddUser";
import { Results } from "../components/Results";
import { AboutUs } from "../components/AboutUs";
import { Contact } from "../components/Contact";
import { useMyContext } from "../context";
import { Footer } from "../components/Footer";


import "./index.css";

function AppUI() {
    const {
        men,
        women,
        textsForMen,
        textsForWomen,
        buttonsClicked,
        setButtonsClicked,
    } = useMyContext();

    const contactRef = useRef(null)
    const aboutUsRef = useRef(null)
    const resultsRef = useRef(null)

    const makeScroll = (componentRef) => {
        componentRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const componentsRefs = {
        aboutUsRef: aboutUsRef,
        contactRef: contactRef,
        resultsRef: resultsRef
    }

    return (
        <React.Fragment>
            <header >
                <h1>Find your love!</h1>
                <Menu makeScroll={makeScroll} ref={componentsRefs} />
            </header>

            <main>
                <section className="Users__section">
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

                <section className="Users__section">
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
                    // This button will hace access to the Results component in order to make scroll to it
                    makeScroll={makeScroll}
                    ref={componentsRefs}
                />


                <section className="Results__section">
                    <Results ref={resultsRef} />
                </section>

                <section>
                    <AboutUs ref={aboutUsRef} />
                </section>

                <section>
                    <Contact ref={contactRef} />
                </section>

                <AddUser />

            </main>


            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default AppUI;
