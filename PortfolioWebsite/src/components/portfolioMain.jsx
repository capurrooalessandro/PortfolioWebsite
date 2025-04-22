import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import TextPage from "./pages/test.jsx"
import HomePage from "./pages/home.jsx"
import AboutPage from './pages/about.jsx'
import EducazionePage from './pages/educazione.jsx'
import { useEffect, useState } from "react";

export const showCols = () => {
    var leftCol = document.getElementById("leftCol")
    var rightCol = document.getElementById("rightCol")

    setTimeout(()=> {
        leftCol.classList.remove("left-col-hidden")
        rightCol.classList.remove("right-col-hidden")
        leftCol.classList.add("col-show-anim")
        rightCol.classList.add("col-show-anim")
    }, 100)
    setTimeout(() => {
        leftCol.classList.remove("col-show-anim")
        rightCol.classList.remove("col-show-anim")
    }, 1300);
};


export default function showPortfolioMain() {

    var currentYear = new Date().getFullYear();

    //////////////////////////////////
    /// Hander code for screen size
    //////////////////////////////////

    const [ScreenSizeLg, setScreenSizeLg] = useState(window.innerWidth <= 991)

    useEffect(() =>{
        const handleResize = () => {
            setScreenSizeLg(window.innerWidth <= 991)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //////////////////////////////////////
    /// Hander code for screen size end
    //////////////////////////////////////
    

    ////////////////////////////////////////////////////////////
    /// Code for various functions (animations, scroll, etc.)
    ////////////////////////////////////////////////////////////

    const scrollToTop = () => {
        if (subpage == "educazione") {
            window.scrollTo({top: 0, behavior: "smooth" });
        } else if (window.innerWidth >= 991) {
            window.scrollTo({top: 50, behavior: "smooth" });
        } else {
            window.scrollTo({top: 0, behavior: "instant" });
        }
    }

    const hideCols = () => {
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        leftCol.classList.add("left-col-show")
        rightCol.classList.add("right-col-show")
        setTimeout(()=> {
            leftCol.classList.remove("left-col-show")
            rightCol.classList.remove("right-col-show")
            leftCol.classList.add("left-col-hide")
            rightCol.classList.add("right-col-hide")
        }, 100)
        setTimeout(() => {
            leftCol.classList.remove("left-col-hide")
            rightCol.classList.remove("right-col-hide")
        }, 1300);
    }

    const closeNavbar = () => {
        if (window.innerWidth <= 991) {
            var navbarCollapse = document.querySelector(".navbar-toggler")
            navbarCollapse.click();
        }
    }

    ////////////////////////////////////
    /// Code for various functions end
    ////////////////////////////////////


    //////////////////////////
    /// Page navigation code
    //////////////////////////

    const getCurrentPage = () => {
        const pathSegments = window.location.pathname.split("/");
        return pathSegments.length > 1 ? pathSegments[1] : "home";
    };

    const validPages = ["home", "about", "competenze", "educazione", "esperienza"];
    const [subpage, setPage] = useState(null);

    const handleNavigation = (newPage, subpage = null) => {
        if (validPages.includes(newPage)) {
            if (window.innerWidth <= 991) {
                window.history.pushState(null, "", `/${newPage}`); 
                setPage(newPage);
            } else {
                hideCols();
                setTimeout(() => {
                    window.history.pushState(null, "", `/${newPage}`); 
                    setPage(newPage);
                    showCols()
                }, 1000);
            }

        } else {
            window.history.replaceState(null, "", "/home");
            setPage("home");
        }
        scrollToTop();
        closeNavbar();
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
                if (window.innerWidth <= 991) {
                    setPage(currentPage);
                } else {
                    hideCols();
                    setTimeout(() => {
                        setPage(currentPage);
                        showCols()
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
        if (subpage !== null) {
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
                            <a className={`nav-link mx-lg-1 ${subpage === "home" ? `active fw-medium ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("home")}>Home</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "about" ? `active fw-medium ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("about")}>About</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "educazione" ? `active fw-medium ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("educazione")}>Educazione</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "competenze" ? `active fw-medium ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("competenze")}>Competenze</a>
                            <div className="border-bottom d-lg-none d-block my-2"></div>
                            <a className={`nav-link mx-lg-1 ${subpage === "esperienza" ? `active fw-medium ${ScreenSizeLg ? "" : "border-bottom border-light"}` : ""}`} onClick={() => handleNavigation("esperienza")}>Esperienza</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='section' className={`container-fluid ${subpage != "home" && ScreenSizeLg ? "" : "min-vh-100"} ${subpage === "home" || subpage === "about" || subpage === "educazione" ? "d-flex align-items-center" : ""} `} data-bs-theme="dark">
                {subpage === "home" && <HomePage/>}
                {subpage === "about" && <AboutPage/>}
                {subpage === "educazione" && <EducazionePage/>}
                {subpage === "competenze" && <TextPage/>}
                {subpage === "esperienza" && <TextPage/>}
            </div>
            <footer className='p-5 text-center fw-medium'>
                © {currentYear} Capurro Alessandro, tutti i diritti riservati.
            </footer>
        </div>
    )
}
