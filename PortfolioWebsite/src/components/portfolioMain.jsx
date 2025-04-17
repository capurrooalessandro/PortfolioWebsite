import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import TextPage from "./pages/test.jsx"
import HomePage from "./pages/home.jsx"
import AboutPage from './pages/about.jsx'
import { useEffect, useState } from "react";

export default function showPortfolioMain() {
    const validPages = ["home", "about", "competenze", "educazione", "esperienza"];

    const scrollToTop = () => {
        window.scrollTo({top: 50, behavior: "smooth" });
    }
    const BlurPage = () => {
        var content = document.getElementById("content")
        content.classList.add("content-loading")
        setTimeout(() => {
            content.classList.remove("content-loading")
            content.classList.add("content-loaded")
        }, 100);
        content.classList.remove("content-loaded")
    };
    
    const getCurrentPage = () => {
        const pathSegments = window.location.pathname.split("/");
        return pathSegments.length > 1 ? pathSegments[1] : "home";
    };

    const [subpage, setPage] = useState(null);

    const handleNavigation = (newPage, subpage = null) => {
        if (validPages.includes(newPage)) {
            window.history.pushState(null, "", `/${newPage}`); 
            setPage(newPage);
        } else {
            window.history.replaceState(null, "", "/home");
            setPage("home");
        }
        BlurPage();
        scrollToTop();
    };

    useEffect(() => {
        const currentPage = getCurrentPage();

        if (!validPages.includes(currentPage) || window.location.pathname == "/") {
            window.history.replaceState(null, "", "/home");
            setPage("home");
        } else {
            setPage(currentPage);
        }

        const handlePopState = () => {
            const currentPage = getCurrentPage();
            if (!validPages.includes(currentPage)) {
                window.history.replaceState(null, "", "/home");
                setPage("home");
            } else {
                setPage(currentPage);
            }
            BlurPage();
        };
            window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (subpage !== null) {
            if (subpage !== "home" && !window.location.pathname.includes(subpage)) {
                window.history.pushState(null, "", `/${subpage}`);
            }
        }
    }, [subpage]);

    if (subpage === null) return null;
    return(
        <div onLoad={() => scrollToTop() + BlurPage()}>
            <nav className="navbar navbar-expand-lg sticky-top p-4" data-bs-theme="dark">
                <div className="container-lg">
                    <a className="navbar-brand" onClick={() => handleNavigation("home")}>Capurro Alessandro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span><FontAwesomeIcon className='fa-duotone fa-lg' icon={faBars}/></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-md-end text-center" id="navbarCollapse">
                        <div className="navbar-nav mt-lg-0 mt-3">
                            <a className={`nav-link mx-lg-1 ${subpage === "home" ? "active" : ""}`} onClick={() => handleNavigation("home")}>Home</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "about" ? "active" : ""}`} onClick={() => handleNavigation("about")}>About</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "educazione" ? "active" : ""}`} onClick={() => handleNavigation("educazione")}>Educazione</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "competenze" ? "active" : ""}`} onClick={() => handleNavigation("competenze")}>Competenze</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "esperienza" ? "active" : ""}`} onClick={() => handleNavigation("esperienza")}>Esperienza</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='content' className={`container min-vh-100 ${subpage === "home" || subpage === "about" ? "d-flex align-items-center" : ""} `}  data-bs-theme="dark">
                {subpage === "home" && <HomePage/>}
                {subpage === "about" && <AboutPage/>}
                {subpage === "competenze" && <TextPage/>}
                {subpage === "educazione" && <TextPage/>}
                {subpage === "esperienza" && <TextPage/>}
            </div>
            <footer className='p-5 text-center'>
                © Capurro Alessandro 2025, tutti i diritti riservati.
            </footer>
        </div>
    )
}
