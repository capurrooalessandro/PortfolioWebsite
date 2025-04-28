import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { scrollToTop, showCols, closeNavbar } from "./constants/pageAnimations.jsx";
import { today } from "./constants/ageCalculator.jsx";

//Compoment relativi alle pagine (vengono mostrati a schermo in base alla voce selezionata nella navbar)
import HomePage from "./pages/home.jsx"
import AboutPage from './pages/about.jsx'
import EducazionePage from './pages/educazione.jsx'
import CompetenzePage from './pages/competenze.jsx'
import EsperienzePage from './pages/esperienze.jsx'

export let subpage; //variabile che contiene le pagine

export default function showPortfolioMain() {
    var currentYear = today.getFullYear(); //variabile utilizzata nel footer per mostrare l'anno corrente

    /////////////////////////////////////////////////////////////////////////////
    // Handle screen size code (utilizzato per rimuovere determinate classi se 
    // la pagina raggiunge determinati tipi di larghezza dello schermo)
    /////////////////////////////////////////////////////////////////////////////

    const [ScreenSizeLg, setScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ScreenSizeXl, setScreenSizeXl] = useState(window.innerWidth <= 1199)
    let setSubpage;
    let page = [subpage, setSubpage] = useState(window.location.pathname); //variabile che contiene la pagina corrente

    useEffect(() =>{
        const handleResize = () => { //costruttore che gestisce il resize della pagina
            setScreenSizeLg(window.innerWidth <= 991) //imposta la larghezza della foto in base alla larghezza dello schermo
            setScreenSizeXl(window.innerWidth <= 1199)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div onLoad={() => scrollToTop() + setSubpage(subpage)}>
            <nav className="navbar navbar-expand-lg sticky-top p-4" data-bs-theme="dark">
                <div className="container-lg">
                    <a className="navbar-brand fw-medium" href="/home" onClick={() => setSubpage(subpage) + scrollToTop()}>Capurro Alessandro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span><FontAwesomeIcon className='fa-lg' icon={faBars}/></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-md-end text-center" id="navbarCollapse">
                        <div className="navbar-nav mt-lg-0 mt-3">
                            <a className={`nav-link mx-lg-1 ${subpage === "/home" || subpage === "/" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} href="/home" onClick={() => setSubpage(subpage) + scrollToTop()}>Home</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "/about" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} href="/about" onClick={() => setSubpage(subpage) + scrollToTop()}>About</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "/educazione" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} href="/educazione" onClick={() => setSubpage(subpage) + scrollToTop()}>Educazione</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "/competenze" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} href="/competenze" onClick={() => setSubpage(subpage) + scrollToTop()}>Competenze</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "/esperienze" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} href="/esperienze" onClick={() => setSubpage(subpage) + scrollToTop()}>Esperienze</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='section' className={`container-fluid ${ScreenSizeLg ? "" : "min-vh-100"} ${subpage != "esperienze" ? "d-flex align-items-center" : ""} `} 
             data-bs-theme="dark">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/home" element={<HomePage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/educazione" element={<EducazionePage/>} />
                        <Route path="/competenze" element={<CompetenzePage/>} />
                        <Route path="/esperienze" element={<EsperienzePage/>} />
                    </Routes>
                </Router>
            </div>
            <footer className={`p-5 text-center fw-medium`}>
                © {currentYear} Capurro Alessandro, tutti i diritti riservati.
            </footer>
        </div>
    )
}

/**                {subpage === "home" && <HomePage/>}
                {subpage === "about" && <AboutPage/>}
                {subpage === "educazione" && <EducazionePage/>}
                {subpage === "competenze" && <CompetenzePage/>}
                {subpage === "esperienze" && <EsperienzePage/>} */