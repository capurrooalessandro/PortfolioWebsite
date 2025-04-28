import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { scrollToTop, hideCols, showCols, closeNavbar } from "./constants/pageAnimations.jsx";
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

    useEffect(() =>{
        const handleResize = () => { //costruttore che gestisce il resize della pagina
            setScreenSizeLg(window.innerWidth <= 991) //imposta la larghezza della foto in base alla larghezza dello schermo
            setScreenSizeXl(window.innerWidth <= 1199)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////
    // Page navigation code (Sistema di navigazione tra le varie pagine, a seconda 
    // della voce selezionata nella navbar viene mostrato a schermo il relativo component)
    //////////////////////////////////////////////////////////////////////////////////////////

    const getCurrentPage = () => { //restituisce la pagina corrente
        const pathSegments = window.location.pathname.split("/");
        return pathSegments.length > 1 ? pathSegments[1] : "home";
    };

    let setPage;
    let pages = [subpage, setPage] = useState(null)


    const handleNavigation = (newPage, subpage = null) => {
    /* 
        in base alla pagina selezionata presente nella navbar viene mostrato il
        component relativo alla pagina (es. se viene cliccata l'opzione "about" 
        la variabile subpage sarà uguale ad about e verà mostrato a schermo il 
        relativo component)

        se la pagina ha come larghezza dello schermo meno di 991px allora
        viene cambiata la pagina senza animazione, altrimenti vengono richiamate 
        le funzioni dedicate alle animazioni (hideCols, showCols) e viene cambiata 
        la pagina  
    */
        if (validPages.includes(newPage)) { //se la pagina è valida viene cambiata, altrimenti viene cambiata in home
            if (window.innerWidth <= 991) {
                window.history.pushState(null, "", `/${newPage}`); 
                setPage(newPage);
                scrollToTop(); //riporta la pagina nella posizione corretta
            } else {
                hideCols(); //nasconde le colonne e il testo
                
                setTimeout(() => {
                    scrollToTop(); //riporta la pagina nella posizione corretta
                }, 500);

                setTimeout(() => {
                    window.history.pushState(null, "", `/${newPage}`);  //cambia l'url
                    setPage(newPage); //cambia la pagina
                    showCols() //mostra le colonne e il testo
                }, 1000);
            }

        } else {
            window.history.replaceState(null, "", "/home");
            setPage("home");
        }
        closeNavbar();
    };

    const validPages = ["home", "about", "competenze", "educazione", "esperienze"]; // array delle pagine valide


    useEffect(() => {
        const currentPage = getCurrentPage();

        if (!validPages.includes(currentPage) || window.location.pathname == "/") {
            //se viene digitato un url errato o dopo lo slash non è presente nessuna voce l'url verrà cambiato con "home"
            window.history.replaceState(null, "", "/home");
            setPage("home");
        } else { 
            setPage(currentPage);
        }

        const handlePopState = () => { //gestione della navigazione con i tasti avanti e indietro
            const currentPage = getCurrentPage(); //getCurrentPage() viene richiamata per ottenere la pagina corrente
            if (!validPages.includes(currentPage)) { //se la pagina non è valida viene cambiata in home
                window.history.replaceState(null, "", "/home");
                setPage("home");
            } else { //altrimenti viene cambiata la pagina
                if (window.innerWidth <= 991) {
                    setPage(currentPage);
                } else {
                    hideCols(); //nasconde le colonne e il testo
                    setTimeout(() => {
                        setPage(currentPage);
                        showCols() //mostra le colonne e il testo
                    }, 1000);
                }
            }
        };
            window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (subpage !== null) { //se la pagina è valida viene cambiata l'url
            if (subpage !== "home" && !window.location.pathname.includes(subpage)) {
                window.history.pushState(null, "", `/${subpage}`);
            }
        }
    }, [subpage]);

    if (subpage === null) return null;

    ///////////////////////////////
    /// Page navigation code end
    ///////////////////////////////

    return(
        <div onLoad={() => scrollToTop()}>
            <nav className="navbar navbar-expand-lg sticky-top p-4" data-bs-theme="dark">
                <div className="container-lg">
                    <a className="navbar-brand fw-medium" onClick={() => handleNavigation("home")}>Capurro Alessandro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span><FontAwesomeIcon className='fa-lg' icon={faBars}/></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-md-end text-center" id="navbarCollapse">
                        <div className="navbar-nav mt-lg-0 mt-3">
                            <a className={`nav-link mx-lg-1 ${subpage === "home" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("home")}>Home</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "about" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("about")}>About</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "educazione" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("educazione")}>Educazione</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "competenze" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("competenze")}>Competenze</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "esperienze" ? `active fw-bold ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("esperienze")}>Esperienze</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='section' className={`container-fluid ${ScreenSizeLg ? "" : "min-vh-100"} ${subpage != "esperienze" ? "d-flex align-items-center" : ""} `} 
                data-bs-theme="dark">
                {subpage === "home" && <HomePage/>}
                {subpage === "about" && <AboutPage/>}
                {subpage === "educazione" && <EducazionePage/>}
                {subpage === "competenze" && <CompetenzePage/>}
                {subpage === "esperienze" && <EsperienzePage/>}
            </div>
            <footer className={`p-5 text-center fw-medium`}>
                © {currentYear} Capurro Alessandro, tutti i diritti riservati.
            </footer>
        </div>
    )
}
