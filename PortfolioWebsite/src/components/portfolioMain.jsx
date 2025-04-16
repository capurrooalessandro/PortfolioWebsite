import viteLogo from '/vite.svg'
import TextPage from "./pages/test.jsx"
import HomePage from "./pages/home.jsx"
import { useEffect, useState } from "react";

export default function showPortfolioMain() {
    var scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth" });
    }

    const validPages = ["home","about", "servizi", "skills", "educazione", "esperienza", "contatti"];
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
        <div>
            <nav className="navbar navbar-expand-lg sticky-top p-4" data-bs-theme="dark">
                <div className="container-lg">
                    <a className="navbar-brand" onClick={() => handleNavigation("home")}>Capurro Alessandro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-md-end text-center" id="navbarCollapse">
                        <div className="navbar-nav mt-lg-0 mt-3">
                            <a className={`nav-link ${subpage === "home" ? "active" : ""}`} onClick={() => handleNavigation("home")}>Home</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "about" ? "active" : ""}`} onClick={() => handleNavigation("about")}>About</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "servizi" ? "active" : ""}`} onClick={() => handleNavigation("servizi")}>Servizi</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "skills" ? "active" : ""}`} onClick={() => handleNavigation("skills")}>Skills</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "educazione" ? "active" : ""}`} onClick={() => handleNavigation("educazione")}>Educazione</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "esperienza" ? "active" : ""}`} onClick={() => handleNavigation("esperienza")}>Esperienza</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link ${subpage === "contatti" ? "active" : ""}`} onClick={() => handleNavigation("contatti")}>Contatti</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`container min-vh-100 ${subpage === "home" ? "d-flex align-items-center" : ""} `}  data-bs-theme="dark">
                {subpage === "home" && <HomePage/>}
                {subpage === "about" && <TextPage/>}
                {subpage === "servizi" && <TextPage/>}
                {subpage === "skills" && <TextPage/>}
                {subpage === "educazione" && <TextPage/>}
                {subpage === "esperienza" && <TextPage/>}
                {subpage === "contatti" && <TextPage/>}
            </div>
            <footer className='p-5 text-center'>
                © Capurro Alessandro 2025, tutti i diritti riservati.
            </footer>
        </div>
    )
}
