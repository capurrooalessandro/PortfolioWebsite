import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { showCols } from "../constants/pageAnimations.jsx";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect } from 'react'

import CurriculumVitae from "/media/files/curriculumVitae.pdf";
import Picture from "/media/images/home.jpg"

export default function showHomePage() {
    /////////////////////////////////////////////////////////////////////////////
    // Handle screen size code (utilizzato per rimuovere determinate classi se 
    // la pagina raggiunge determinati tipi di larghezza dello schermo)
    /////////////////////////////////////////////////////////////////////////////

    const [ScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoLg, setResizePhotoLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoMobile, setResizePhotoMobile] = useState(window.innerWidth <= 539)

    useEffect(() =>{
        const handleResize = () => { //costruttore che gestisce il resize della pagina
            setResizePhotoLg(window.innerWidth <= 991) //imposta la larghezza della foto in base alla larghezza dello schermo
            setResizePhotoMobile(window.innerWidth <= 539)
        };
        if (window.innerWidth >= 991) {
            showCols()
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //variabili utilizzate per i contatti (in modo da avere un codice più pulito)
    var EmailAddress = 'mailto:alessandro.capurro.iic@gmail.com';
    var LinkedinAccount = 'https://www.linkedin.com/in/alessandro-capurro-abbb10340';
    var GithubLink = 'https://github.com/capurrooalessandro';
    var IGAccount = 'https://www.instagram.com/capurroo.alessandro/'
    var CVFileName = 'Curriculum Vitae CAPURRO ALESSANDRO';

    return(
        <div className='container'>
            <div className="row my-lg-0 my-5">
                <div id='leftCol' className={`col-lg-5 d-flex align-items-center justify-content-center mb-lg-0 mb-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoLg ? `${ResizePhotoMobile ? "300" : "320"}` : "350"}`} 
                    height={`${ResizePhotoLg ? `${ResizePhotoMobile ? "300" : "320"}` : "350"}`} loading='lazy' 
                    className='rounded-circle border border-4 mb-lg-0 mb-5'/>
                </div>
                <div id='rightCol' className={`col-lg-7 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <h1 className='fw-normal'><span className='fw-semibold'>Ciao</span>, sono <span className='fw-bold fc-teal'>Alessandro</span>,</h1>
                    <h2 className="fw-normal mb-3">Sono un <span className='fw-bold fc-purple'><Typewriter words={["Front-end", "Web"]} loop={0} cursor 
                    cursorStyle='' typeSpeed={70} deleteSpeed={50} delaySpeed={1500}/></span><span className="fw-medium"> Developer.</span></h2>
                    <p className='fs-5 fw-normal mb-2'>
                        Benvenuto nel mio portfolio online!
                    </p> 
                    <p className='fs-5 fw-normal mb-1'> 
                        Qui puoi dare un'occhiata al mio percorso: <span className="fw-semibold">studi</span>, 
                        <span className="fw-semibold"> competenze </span> ed
                        <span className="fw-semibold"> esperienze <br className='d-xxl-inline d-none' /> lavorative </span> 
                        nel mondo dello <span className="fw-semibold fst-italic">sviluppo web</span>. 
                    </p>
                    <p className='fs-5 fw-normal'> Se hai bisogno di un <span className="fw-semibold">front-end developer </span>
                        o hai intenzione di contattarmi per un'eventuale offerta lavorativa, trovi i miei contatti 
                        <span className="fw-bold"> qui sotto</span>:
                    </p>
                    <div className="mt-1 mb-3">
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={EmailAddress}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={LinkedinAccount} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={IGAccount} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={GithubLink} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <a type='button' className='btn btn-lg px-4 fw-medium text-center cv-btn btn-light rounded-5' 
                        download={CVFileName} href={CurriculumVitae}> Scarica CV &nbsp;
                        <span className='icon-color'><FontAwesomeIcon icon={faFileArrowDown}/></span>
                    </a>
                </div>
            </div>
        </div>
    )   
}