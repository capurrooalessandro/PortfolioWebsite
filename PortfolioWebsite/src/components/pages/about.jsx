import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols } from "../portfolioMain.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Typewriter } from 'react-simple-typewriter'

import CurriculumVitae from "/media/files/curriculumVitae.pdf";
import Picture from "/media/images/smusi.jpg"

export default function showAboutPage() {
    var currentDay = new Date("Jan 1 2025").getDate();
    var currentYear = new Date("Jan 1 2025").getFullYear();
    var currentMonth = new Date("Jan 1 2025").getUTCMonth();
    var currentDate = currentDay + " " + currentMonth + " " + currentYear;
    var birthdayDate = "Jun 15 " + currentYear;
    console.log("year: " + currentYear)
    console.log("day: " + currentDay)
    console.log("month: " + currentMonth)
    console.log("current date:" + currentDate)
    console.log(birthdayDate)
    const [birthYear, setbirthYear] = useState(2002);
    const [age, setAge] = useState();
    const [ScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoXxl, setResizePhotoXxl] = useState(window.innerWidth <= 1399)
    const [ResizePhotoMd, setResizePhotoMd] = useState(window.innerWidth <= 767)

    const getAge = () => {
        while (birthdayDate != currentDay) {
            if (birthdayDate == "Jun 15 " + currentYear || currentMonth <= 5 && currentMonth >= 11) {
                var theAge = currentYear - birthYear;
                console.log(theAge)
                setAge(theAge);
                break
            } else if (currentMonth <= 11 && currentMonth >= 5) {
                var theAge = currentYear - birthYear - 1;
                console.log(theAge)
                setAge(theAge);
            }
            break;
        }
    }

    useEffect(() =>{
        const handleResize = () => {
            setResizePhotoXxl(window.innerWidth <= 1399)
            setResizePhotoMd(window.innerWidth <= 767)
        };
        if (window.innerWidth >= 991) {
            showCols()
        }
        getAge()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className='container'>
            <div className="row my-lg-0 my-5">
                <div id='leftCol' className={`col-lg-6 mb-lg-0 mb-4 py-lg-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <h1 className='fw-bold mb-lg-4 mb-4 mt-lg-2'>
                        Chi sono <span className="fw-normal">e</span> cosa faccio<span className="fw-normal">:</span>
                    </h1>
                    <p className='fs-5 fw-normal mb-lg-2 mb-3'>
                        Mi chiamo <span className='fw-medium'>Alessandro Capurro</span>, vengo da <span className="fw-medium">
                        Genova</span>, ho <span className="fw-medium">{age}</span> anni e sono nato il <span className='fw-medium fst-italic'>
                        15 Giugno 2002</span>. Sono una persona creativa, curiosa, determinata e sempre alla ricerca di nuove sfide.
                    </p>
                    <p className='fs-5 fw-normal mb-lg-2 mb-3'>Ho diverse passioni che variano dalla musica al fai da te, ma la 
                    mia passione principale è l'informatica. La mia passione per l’informatica è nata fin da piccolo, quando 
                    ho iniziato ad essere curioso di come funzionassero programmi come i browser o come creare pagine web, 
                    curiosità che con il tempo si è trasformata in un vero e proprio interesse per la programmazione web 
                    lato front-end, che oggi è al centro del mio percorso di crescita. </p>
                    <p className='fs-5 fw-normal'>Il mio obiettivo è diventare uno sviluppatore front-end: adoro creare interfacce intuitive, moderne e responsive, 
                    capaci di offrire una bella esperienza utente. Lavoro costantemente per migliorare le mie competenze in HTML, CSS, 
                    JavaScript e framework come React, e sto costruendo passo dopo passo il mio percorso professionale in questo settore.
                    </p>
                </div>
                <div id='rightCol' className={`col-lg-6 d-flex align-items-center justify-content-center p-0 ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} 
                    height={`${ResizePhotoXxl ? `${ResizePhotoMd ? "350" : "400"}` : "500"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-lg-0 mb-5'/>
                </div>
            </div>
        </div>
    )   
}