import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols } from "../constants/pageAnimations.jsx";

import IISCalvino from "/media/images/iis-calvino.jpg"
import GastaldiAbba from "/media/images/gastaldi-abba.jpg"


export default function showAboutPage() {
    const [ScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoXxl, setResizePhotoXxl] = useState(window.innerWidth <= 1399)
    const [ResizePhotoMd, setResizePhotoMd] = useState(window.innerWidth <= 767)

    useEffect(() =>{
        const handleResize = () => {
            setResizePhotoXxl(window.innerWidth <= 1399)
            setResizePhotoMd(window.innerWidth <= 767)
        };
        if (window.innerWidth >= 991) {
            showCols()
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className='container'>
            <div id='firstRow' className={`row my-lg-5 my-3 mt-4 rounded-4 py-lg-5 pt-5 pb-4 ${ScreenSizeLg ? "bg-card" : ""}`}>
                <div id='leftCol' className={`col-lg-6 d-flex align-items-center justify-content-center p-0 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <img src={IISCalvino} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} loading='lazy' 
                    className='rounded-5 border border-4'/>
                </div>
                <div id='rightCol' className={`col-lg-6 d-flex align-items-center ps-lg-0 justify-content-lg-end justify-content-center py-lg-3 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <div className='mx-xl-5 mx-lg-4 mx-3'>
                        <h1 className='fw-bold mt-lg-0 mt-4 mb-3'>
                            I miei studi<span className="fw-normal">:</span>
                        </h1>
                        <p className='fs-5 fw-normal mb-xl-2 mb-3'>
                            Ho iniziato il mio percorso di studi in ambito informatico presso 
                            l'<span className="fw-medium fst-italic">IIS Italo Calvino</span> di 
                            <span className="fw-medium"> Genova</span>, dove ho frequentato i 
                            primi quattro anni. 
                        </p>
                        <p className="fs-5 fw-normal">
                            Tuttavia, nel corso del tempo ho riscontrato diverse lacune nell'approccio didattico 
                            e nella qualità dell'insegnamento, in particolare per quanto riguarda l'approfondimento 
                            delle materie di indirizzo.
                        </p>
                    </div>
                </div>
            </div>
            <div id='secondRow' className={`row pt-5 rounded-4 mb-lg-5 mb-4 py-lg-2 pb-5 ${ScreenSizeLg ? "bg-card" : ""}`}>
                <div id='leftColGastaldi' className={`col-lg-6 d-flex align-items-center mb-lg-0 mb-4 pe-lg-0 justify-content-lg-end justify-content-center py-lg-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <div className="mx-xl-5 mx-lg-4 mx-3">
                        <p className='fs-5 fw-normal mb-xl-2 mb-3'>
                            Per questo motivo ho scelto di trasferirmi all'<span className="fw-medium fst-italic">Istituto Tecnico 
                            Gastaldi-Abba</span>, sempre a <span className="fw-medium">Genova</span>, dove ho trovato 
                            un ambiente più stimolante e un programma formativo più solido.
                        </p>
                        <p className="fs-5 fw-normal mb-lg-0 mb-3">
                            Qui ho conseguito il diploma di <span className="fw-bold">Perito Informatico </span>
                            con una valutazione di <span className="fw-bold">81/100</span>.
                        </p>
                    </div>
                </div>
                <div id='rightColGastaldi' className={`col-lg-6 d-flex align-items-center justify-content-center my-lg-5 p-0 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <img src={GastaldiAbba} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "380"}` : "480"}`} loading='lazy' 
                    className='rounded-5 border border-4'/>
                </div>
            </div>
        </div>
    )   
}
