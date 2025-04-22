import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols } from "../portfolioMain.jsx";

import CurriculumVitae from "/media/files/curriculumVitae.pdf";
import Picture from "/media/images/smusi.jpg"


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
            <div className="row my-5 rounded-4 bg-purple py-5">
                <div id='leftCol' className={`col-lg-6 d-flex align-items-center justify-content-end mb-lg-0 mb-4 py-lg-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <div className='mx-5'>
                        <h1 className='fw-normal mb-lg-4 mb-4'>
                            I miei studi:
                        </h1>
                        <p className='fs-5 fw-normal'>
                            Ho iniziato il mio percorso di studi in ambito informatico presso l'IIS Italo Calvino di Genova, 
                            dove ho frequentato i primi quattro anni. Tuttavia, nel corso del tempo ho riscontrato diverse 
                            lacune nell'approccio didattico e nella qualità dell'insegnamento, in particolare per quanto riguarda 
                            l'approfondimento delle materie tecniche e di indirizzo.
                        </p>
                    </div>
                </div>
                <div id='rightCol' className={`col-lg-6 d-flex align-items-center justify-content-center p-0 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-lg-0 mb-5'/>
                </div>
            </div>
            <div className="row pt-5 rounded-4 bg-purple my-5 py-5">
                <div id='leftCol' className={`col-lg-6 d-flex align-items-center justify-content-center p-0`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-lg-0 mb-5'/>
                </div>
                <div id='rightCol' className={`col-lg-6 d-flex align-items-center justify-content-start mb-lg-0 mb-4 py-lg-3`}>
                    <div className="mx-5">
                        <p className='fs-5 fw-normal'>
                            Per questo motivo ho scelto di trasferirmi all'Istituto Tecnico Gastaldi-Abba, sempre a Genova, 
                            dove ho trovato un ambiente più stimolante e un programma formativo più solido. Qui ho conseguito 
                            il diploma di Perito Informatico con una valutazione di 81/100.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )   
}
                    {/*<p className='fs-5 fw-normal'> da mettere su "competenze"
                    Nel corso del mio percorso di studi ho avuto modo di approfondire diverse competenze, sia in ambito 
                    informatico che non. Ho conseguito la certificazione ECDL Core, che mi ha fornito una solida base 
                    nell'uso degli strumenti informatici più comuni, e ho seguito il corso Cisco IT Essentials 6.0, 
                    grazie al quale ho sviluppato conoscenze pratiche sull'hardware dei computer e sul funzionamento 
                    dei sistemi operativi.
                    Parallelamente, ho anche lavorato sul miglioramento delle mie competenze linguistiche ottenendo 
                    il First Certificate in English (B2), che attesta un buon livello di padronanza della lingua inglese,
                    utile sia in contesti accademici che professionali.
                    </p>*/}