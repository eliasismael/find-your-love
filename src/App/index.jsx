import AppUI from "./AppUI";
import "./index.css";

import { ContextProvider } from "../context";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

function App() {
    return (
        <ContextProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<AppUI />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<p>Error 404</p>} />
                </Routes>
            </HashRouter>
        </ContextProvider>
    );
}

export default App;
