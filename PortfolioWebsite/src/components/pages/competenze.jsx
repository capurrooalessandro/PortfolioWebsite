import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols } from "../constants/pageAnimations.jsx";

import Picture from "/media/images/competenze.jpg"

export default function showAboutPage() {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Handle screen size code (utilizzato per rimuovere determinate classi o parametri se 
    // la pagina raggiunge determinati tipi di larghezza dello schermo)
    //////////////////////////////////////////////////////////////////////////////////////////

    const [ScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoXxl, setResizePhotoXxl] = useState(window.innerWidth <= 1399)
    const [ResizePhotoXl, setResizePhotoXl] = useState(window.innerWidth <= 1199)
    const [ResizePhotoMobile, setResizePhotoMobile] = useState(window.innerWidth <= 575)

    useEffect(() =>{
        const handleResize = () => { //costruttore che gestisce il resize della pagina
            setResizePhotoXxl(window.innerWidth <= 1399) //imposta la larghezza della foto in base alla larghezza dello schermo
            setResizePhotoXl(window.innerWidth <= 1199)
            setResizePhotoMobile(window.innerWidth <= 575)
        };
        if (window.innerWidth >= 991) {
            showCols()
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className='container'>
            <div className="row my-xl-0 my-5">
                <div id='leftCol' className={`col-xl-6 mb-xl-0 mb-4 py-xl-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <h1 className='fw-bold text-start mb-xl-4 mb-4'>
                        Le mie <span className="fc-purple">competenze</span>:
                    </h1>
                    <p className="fs-5 fw-normal mb-3">
                        Sia da autodidatta che grazie al mio percorso di studi, negli anni, ho avuto 
                        l'opportunità di studiare più affondo e approfondire linguaggi come: 
                        <span className="fw-semibold"> HTML5, CSS3, JavaScript, JQuery, PHP </span> 
                        e framework come <span className="fw-semibold">Bootstrap</span> e 
                        <span className="fw-semibold"> React</span>.
                    </p>
                    <p className='fs-5 fw-normal mb-3'> 
                        Inoltre, nel corso del mio percorso di studi ho avuto modo di approfondire diverse 
                        specializzazioni, sia in ambito informatico che non. Ho conseguito la certificazione 
                        <span className="fw-semibold fst-italic"> ECDL Core</span>, che mi ha fornito una solida base 
                        nell'uso degli strumenti informatici più comuni, e ho seguito il corso 
                        <span className="fw-semibold fst-italic"> Cisco IT Essentials 6.0</span>, grazie al quale ho 
                        sviluppato conoscenze pratiche sull'hardware dei computer e sul funzionamento 
                        dei sistemi operativi.
                    </p>
                    <p className="fs-5 fw-normal">
                        Parallelamente, ho anche lavorato sul miglioramento delle mie competenze linguistiche 
                        ottenendo il <span className="fw-semibold fst-italic">First Certificate in English (B2)</span>, che 
                        attesta un buon livello di padronanza della lingua inglese, utile sia in contesti 
                        accademici che professionali.
                    </p>
                </div>
                <div id='rightCol' className={`col-xl-6 mt-xl-2 d-none d-sm-flex align-items-center justify-content-center p-0 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `450` : "520"}` : "550"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoXl ? `300` : "320"}` : "350"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-xl-0 mb-5'/>
                </div>
            </div>
        </div>
    )   
}