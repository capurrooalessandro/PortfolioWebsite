import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols } from "../constants/pageAnimations.jsx";
import { getAge } from "../constants/ageCalculator.jsx";

import Picture from "/media/images/about.jpg"

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
            <div className="row my-lg-0 my-5">
                <div id='leftCol' className={`col-xl-6 mb-xl-0 mb-4 py-xl-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <h1 className='fw-normal mb-xl-4 mb-4 mt-xl-2 mt-lg-5'>
                        <span className="fw-bold fc-teal">Chi sono</span> e <span className="fw-bold fc-purple">cosa faccio</span>:
                    </h1>
                    <p className='fs-5 fw-normal mb-xl-2 mb-3'>
                        Mi chiamo <span className='fw-semibold'>Alessandro Capurro</span>, vengo da <span className="fw-medium">
                        Genova</span>, ho <span className="fw-semibold">{getAge()}</span> anni e sono nato il <span className='fw-medium fst-italic'>
                        15 Giugno 2002</span>. Sono una persona creativa, curiosa, determinata e sempre alla ricerca di nuove sfide.
                    </p>
                    <p className='fs-5 fw-normal mb-xl-2 mb-3'>
                        Ho diverse passioni che variano dalla musica al fai da te, ma la mia passione principale è 
                        <span className='fw-semibold'> l'informatica.</span> Questa mia passione è nata fin da piccolo,
                        quando ho iniziato ad essere curioso di come funzionassero programmi come i browser ed in 
                        particolare come funzionassero le pagine web, curiosità che con il tempo si è trasformata in 
                        un vero e proprio interesse per la programmazione web lato <span className="fw-bold">front-end</span>, 
                        che oggi è al centro del mio percorso di crescita. 
                    </p>
                    <p className='fs-5 fw-normal'>
                        Il mio obiettivo è diventare uno <span className="fw-bold">sviluppatore front-end</span>: 
                        adoro creare interfacce intuitive, moderne e responsive, capaci di offrire una bella esperienza utente. 
                        Lavoro costantemente per migliorare le mie competenze in <span className="fw-semibold fst-italic">HTML, CSS, 
                        JavaScript</span> e framework come <span className="fw-semibold fst-italic"> React</span>, e sto costruendo 
                        passo dopo passo il mio percorso professionale in questo settore.
                    </p>
                </div>
                <div id='rightCol' className={`col-xl-6 d-flex align-items-center justify-content-center p-0 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "420" : "480"}` : "600"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-xl-0 mb-5'/>
                </div>
            </div>
        </div>
    )   
}