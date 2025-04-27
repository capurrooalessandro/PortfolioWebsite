import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { showCols, scrollToTop } from "../constants/pageAnimations.jsx";

//import immagini
import TemplateCSSImage from "/media/images/template-css.jpg"
import CalcolatriceImage from "/media/images/calcolatrice.jpg"
import InserimentoDatiImage from "/media/images/inserimento-dati.jpg"
import GiocoImpiccatoImage from "/media/images/gioco-impiccato.jpg"
import TrisJQueryImage from "/media/images/tris-jquery.jpg"
import SpaceInvadersImage from "/media/images/space-invaders.jpg"
import SitoWebGastaldiImage from "/media/images/sito-web-gastaldi.jpg"
import BookingManagerImage from "/media/images/remsec.jpg"
import PortfolioWebsiteImage from "/media/images/portfolio.jpg"

//link siti web
var W3Schools = "https://www.w3schools.com/html/html_layout.asp"
var SitoWebGastaldi = "https://capurroalessandro.altervista.org/index.php"
var PortfolioGithub = "https://github.com/capurrooalessandro/PortfolioWebsite"

export default function showEsperienzaPage() {
    const [ScreenSizeLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoXxl, setResizePhotoXxl] = useState(window.innerWidth <= 1399)
    const [ResizePhotoXl, setResizePhotoXl] = useState(window.innerWidth <= 1199)
    const [ResizePhotoLg, setResizePhotoLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoMd, setResizePhotoMd] = useState(window.innerWidth <= 767)
    const [ResizePhotoSm, setResizePhotoSm] = useState(window.innerWidth <= 575)
    const [ResizePhotoXs, setResizePhotoXs] = useState(window.innerWidth <= 539)

    useEffect(() =>{
        const handleResize = () => {
            setResizePhotoXxl(window.innerWidth <= 1399)
            setResizePhotoXl(window.innerWidth <= 1199)
            setResizePhotoLg(window.innerWidth <= 991)
            setResizePhotoMd(window.innerWidth <= 767)
            setResizePhotoSm(window.innerWidth <= 575)
            setResizePhotoXs(window.innerWidth <= 539)

        };
        if (window.innerWidth >= 991) {
            showCols()
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const hideCaption = () => {
        const collapseImgs = document.querySelectorAll(".img-fluid");
        const collapseDivs = document.querySelectorAll(".collapse");
    
        collapseImgs.forEach(img => {
            const captionId = img.getAttribute('data-target');
            const caption = document.getElementById(captionId);
            if (!caption) return; // safety check
    
            const isExpanded = img.getAttribute('aria-expanded') === "true";
    
            if (isExpanded) {
                caption.classList.add("d-none");
            } else {
                caption.classList.remove("d-none");
            }
        });
    }

    return(
        <div className={`container`}>
            <div className={`row my-lg-0 my-5 pb-lg-5 pb-2 pt-lg-5 pt-0`}>
                <div id='leftCol' className={`col-lg-12 mt-lg-5 py-lg-3 ${ScreenSizeLg ? "" : "left-col-hidden"}`}>
                    <h1 className='fw-bold text-start mb-md-4 mb-sm-3 mb-4'>
                        Le mie esperienze lavorative (sia scolastiche che non):
                    </h1>
                </div>
                <div id='rightCol' className={`col-lg ${ScreenSizeLg ? "" : "right-col-hidden"}`}>
                    <p className="fs-5 fw-normal mb-lg-4 mb-sm-3 mb-4">
                        In questa sezione puoi trovare le mie esperienze lavorative maturate negli anni, 
                        che mi hanno permesso di crescere professionalmente e acquisire competenze pratiche 
                        nello sviluppo di pagine web dinamiche e nella creazione di applicazioni integrate 
                        all'interno di esse.
                    </p>
                    <p className="fs-5 fw-normal mb-lg-4 mb-sm-3 mb-4">
                        Ogni esperienza ha contribuito ad arricchire le mie capacità tecniche e a 
                        consolidare il mio approccio alla programmazione moderna, orientato sia all'efficienza 
                        che alla qualità del prodotto finale.
                    </p>
                    <p className="fs-5 fw-normal">
                        Per molti dei progetti web che trovi elencati, è disponibile nella descrizione il link 
                        diretto alla relativa pagina GitHub, dove puoi visualizzare il codice sorgente e approfondire 
                        il lavoro svolto.
                    </p>
                </div>
            </div>
            {/* 2018/2019 Italo Calvino */}
            <div id="row" className={`container-sm mt-lg-3 ${ScreenSizeLg ? "" : "text-hidden"}`}>
                <div className="row py-3 mb-5 bg-card mx-sm-auto rounded-3 justify-content-lg-center">
                    <div className="d-inline">
                        <h2 className="fw-bold d-inline">2018/2019 </h2>
                        <h3 className='fw-medium d-inline'>(IIS Italo Calvino)</h3>
                        <div className="border-bottom mt-3 mb-5"></div>
                    </div>
                    <div className="col-xl-10 mb-5">
                        <h3 className='fw-medium text-center mb-3'>Template responsive (2018):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={TemplateCSSImage} alt="Template Responsive" data-target="caption1" data-bs-toggle="collapse" data-bs-target="#descrizione1" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620"
                                    className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione1'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    L'obiettivo di questo progetto era sviluppare un template di pagina web completamente 
                                    responsive, ispirato al <a href={W3Schools} target="_blank">layout proposto da W3Schools</a>. 
                                    Partendo da questa base, ho personalizzato l'aspetto grafico intervenendo sulle classi CSS, 
                                    adattandolo al mio stile e alle mie esigenze creative.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: <span className="fst-italic fw-medium">HTML5, CSS</span>
                                </p>
                            </div>
                            <p id='caption1' className={`fs-6 fw-bold mt-3 mb-1 mx-3 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                    <div className="col-xl-10 mb-5">
                        <h3 className='text-center fw-medium mb-3'>Calcolatrice (2018):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={CalcolatriceImage} alt="Calcolatrice" data-target="caption2" data-bs-toggle="collapse" data-bs-target="#descrizione2" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione2'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    In questo progetto mi sono dedicato alla creazione di una pagina HTML che ospita 
                                    una calcolatrice funzionale, sviluppata in JavaScript attraverso l’utilizzo della 
                                    funzione <span className="fw-medium fst-italic">eval()</span>. 
                                    Per completare il lavoro, ho curato l’aspetto estetico della pagina applicando stili 
                                    personalizzati tramite classi CSS, rendendo l'interfaccia intuitiva e visivamente gradevole.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: <span className="fst-italic fw-medium">HTML5, CSS, JavaScript</span>.
                                </p>
                            </div>
                            <p id='caption2' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                    <div className="col-xl-10 pb-3">
                        <h3 className='text-center fw-medium mb-3'>Inserimento Dati (2019):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={InserimentoDatiImage} alt="Inserimento Dati" data-target="caption3" data-bs-toggle="collapse" data-bs-target="#descrizione3" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione3'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    In questo progetto ho realizzato, utilizzando JavaScript, un array indicizzato che permette di 
                                    inserire diversi parametri <span className="fw-medium">(nome, cognome, età e lavoro)</span>, 
                                    e di gestirne la visualizzazione in modo dinamico. Gli utenti possono esplorare l'intero contenuto 
                                    dell'array spostandosi direttamente all'inizio o alla fine, oppure visualizzare un parametro alla 
                                    volta cliccando sulle frecce presenti nell'interfaccia grafica. I dati vengono mostrati in una 
                                    textarea seguendo un ordine preciso: nome, cognome, età e infine lavoro.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: <span className="fst-italic fw-medium">HTML5, CSS, JavaScript</span>.
                                </p>
                            </div>
                            <p id='caption3' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                </div>
                {/* 2019/2020 Italo Calvino */}
                <div className="row py-3 mb-5 mt-3 bg-card mx-sm-auto rounded-3 justify-content-lg-center">
                    <div className="d-inline">
                        <h2 className="fw-bold d-inline">2019/2020 </h2>
                        <h3 className='fw-medium d-inline'>(IIS Italo Calvino)</h3>
                        <div className="border-bottom mt-3 mb-5"></div>
                    </div>
                    <div className="col-xl-10 mb-5">
                        <h3 className='text-center fw-medium mb-3'>Gioco dell'impiccato (2019):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={GiocoImpiccatoImage} alt="Gioco dell'impiccato" data-target="caption4" data-bs-toggle="collapse" data-bs-target="#descrizione4" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione4'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    In questo progetto ho sviluppato il gioco dell’impiccato utilizzando JavaScript e jQuery. 
                                    Il giocatore può avviare una nuova partita cliccando sull'apposito pulsante e inserire una 
                                    parola a sua scelta. Si hanno a disposizione 8 tentativi per indovinare la parola: a ogni errore, 
                                    viene disegnato progressivamente l'omino impiccato, frame dopo frame. Se i tentativi terminano 
                                    senza trovare la parola, la partita si conclude; in caso di vittoria, comparirà a schermo 
                                    il messaggio "Hai vinto".
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: <span className="fst-italic fw-medium">HTML5, CSS, JavaScript, JQuery</span>.
                                </p>
                            </div>
                            <p id='caption4' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                    <div className="col-xl-10 mb-5">
                        <h3 className='text-center fw-medium mb-3'>Tris (2019):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={TrisJQueryImage} alt="Tris" data-target="caption5" data-bs-toggle="collapse" data-bs-target="#descrizione5" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione5'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    In questo progetto ho ricreato il classico gioco del tris utilizzando JavaScript e jQuery, 
                                    integrandolo all'interno di una pagina HTML. L'obiettivo era offrire un'esperienza di gioco 
                                    semplice e intuitiva, curando sia la logica di funzionamento che l'interattività dell'
                                    interfaccia.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: 
                                    <span className="fst-italic fw-medium"> HTML5, CSS, JavaScript, JQuery</span>.
                                </p>
                            </div>
                            <p id='caption5' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                    <div className="col-xl-10 pb-3">
                        <h3 className='text-center fw-medium mb-3'>Space Invaders (2020):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={SpaceInvadersImage} alt="Space Invaders" data-target="caption6" data-bs-toggle="collapse" data-bs-target="#descrizione6" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620"
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione6'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal"> 
                                    In questo progetto mi sono dedicato allo sviluppo di un clone di Space Invaders, 
                                    realizzando la grafica tramite la libreria Canvas e gestendo la logica di gioco con 
                                    JavaScript e jQuery. Purtroppo, il progetto è rimasto incompleto a causa della pandemia 
                                    di COVID-19 e di un successivo cambio di programma da parte della docente. Nonostante ciò, 
                                    il lavoro svolto rappresenta un'esperienza importante nella gestione della grafica dinamica 
                                    e delle meccaniche di gioco.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: 
                                    <span className="fst-italic fw-medium"> HTML5, CSS, JavaScript, JQuery, Canvas (HTML5)</span>.
                                </p>
                            </div>
                            <p id='caption6' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                </div>
                {/* 2021/2022 Gastaldi-Abba */}
                <div className="row py-3 mb-5 mt-3 bg-card mx-sm-auto rounded-3 justify-content-lg-center">
                    <div className="d-inline">
                        <h2 className="fw-bold d-inline">2021/2022 </h2>
                        <h3 className='fw-medium d-inline'>(Gastaldi-Abba)</h3>
                        <div className="border-bottom mt-3 mb-5"></div>
                    </div>
                    <div className="col-xl-10 pb-3">
                        <h3 className='text-center fw-medium mb-3'><a className='whiteText' href={SitoWebGastaldi} target='_blank'>Sito web sui sintetizzatori</a> (Maturità 2022):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={SitoWebGastaldiImage} alt="Sito web sui sintetizzatori" data-target="caption7" data-bs-toggle="collapse" data-bs-target="#descrizione7" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione7'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal mb-2"> 
                                    Per il progetto di Maturità 2022, ho realizzato una <a href={SitoWebGastaldi} target='_blank'>
                                    pagina web</a> responsive, utilizzando il framework Bootstrap, dedicata al mondo della musica, 
                                    con un focus particolare sui sintetizzatori musicali: cos'è un sintetizzatore, come funziona, 
                                    la sua evoluzione storica e le principali differenze tra le varie tipologie esistenti.
                                    All'interno della pagina è presente anche una sezione dinamica che presenta una tabella collegata 
                                    a un database MySQL, contenente una raccolta di sintetizzatori.
                                </p>
                                <p className="fs-5 fw-normal">
                                    L’accesso alla gestione della tabella è riservato agli amministratori: tramite una schermata di login è 
                                    possibile autenticarsi e successivamente modificare, eliminare o aggiungere nuovi sintetizzatori all'elenco. 
                                    Questo progetto mi ha permesso di integrare competenze di sviluppo front-end, gestione database e autenticazione 
                                    utente.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: 
                                    <span className="fst-italic fw-medium"> HTML5, CSS, JavaScript, JQuery, Bootstrap 4, PHP, MySQL</span>.
                                </p>
                            </div>
                            <p id='caption7' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                </div>
                {/* 2024/2025 */}
                <div className="row py-3 mb-5 mt-3 bg-card mx-sm-auto rounded-3 justify-content-lg-center">
                    <div className='d-inline'>
                        <h2 className="fw-bold d-inline">2024/2025 </h2>
                        <h3 className='fw-medium d-inline'>(Indipendente)</h3>
                        <div className="border-bottom mt-3 mb-5"></div>
                    </div>
                    <div className="col-xl-10 mb-5">
                        <h3 className='text-center fw-medium mb-3'>RemSec / Booking-Manager (2024):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={BookingManagerImage} alt="RemSec" data-target="caption8" data-bs-toggle="collapse" data-bs-target="#descrizione8" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione8'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal mb-3"> 
                                    RemSec (nome provvisorio) è un servizio dedicato alla gestione di B&B e affittacamere, 
                                    pensato per automatizzare i processi di check-in e check-out, rendendoli semplici, 
                                    immediati e completamente digitali.
                                </p>
                                <p className="fs-5 fw-normal mb-3"> 
                                    Con RemSec, gli ospiti possono registrarsi online prima dell'arrivo, caricando il proprio documento 
                                    o inserendo i dati richiesti. Il sistema è progettato per essere veloce, intuitivo e pienamente conforme 
                                    alle normative vigenti.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Grazie a questo progetto, ho avuto l'opportunità di approfondire e consolidare le mie competenze 
                                    nello sviluppo front-end e back-end, lavorando con tecnologie come React (con Vite), Node.js, 
                                    Java Spring Boot 3 e MySQL.
                                    Al momento il servizio è ancora WIP, ma verrà presentato a breve una volta ultimate 
                                    le funzioni principali.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: 
                                    <span className="fst-italic fw-medium"> HTML5, CSS, JavaScript, JQuery, Bootstrap 5.3, React(con Vite), Node.js, Java Spring Boot 3, MySQL</span>.
                                </p>
                            </div>
                            <p id='caption8' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                    <div className="col-xl-10 pb-3">
                        <h3 className='text-center fw-medium mb-3'>Il mio Portfolio (2025):</h3>
                        <figure className={`pt-4 pb-2 mx-lg-5 bg-figure border border-1 rounded-4`}>
                            <div className="d-flex justify-content-center">
                                <img src={PortfolioWebsiteImage} alt="Il mio Portfolio" data-target="caption9" data-bs-toggle="collapse" data-bs-target="#descrizione9" width={`${ResizePhotoXxl ? `${ResizePhotoXl ? `${ResizePhotoLg ? 
                                    `${ResizePhotoMd ? `${ResizePhotoSm ? `${ResizePhotoXs ? "320" : "440"}` : "420"}` : "580"}` : "680"}` : `680`}` : "880" }`} height="620" 
                                     className='border img-fluid rounded-2 border-4' onClick={() => hideCaption()} aria-expanded="false"/>
                            </div>
                            <div className="collapse px-2 pt-3" id='descrizione9'>
                                <h4 className="fw-medium">Descrizione:</h4>
                                <p className="fs-5 fw-normal mb-2"> 
                                    Anche il mio portfolio online <span className="fw-medium">(il sito che stai visitando in questo momento)</span> è 
                                    stato interamente progettato e realizzato da zero da me.
                                    Ho scelto di seguire questo approccio non solo come esercizio pratico, ma anche per avere 
                                    la libertà di creare uno spazio che rispecchiasse pienamente il mio stile e la mia personalità, 
                                    rendendolo unico e autentico.
                                </p>
                                <p className="fs-5 fw-normal">
                                    Linguaggi utilizzati: 
                                    <span className="fst-italic fw-medium"> HTML5, CSS, JavaScript, Bootstrap 5.3, React(con Vite), Node.js</span>.
                                </p>
                                <p className="fs-5 fw-normal">
                                    GitHub: <a href={PortfolioGithub} target='_blank'>{PortfolioGithub}</a>
                                </p>
                            </div>
                            <p id='caption9' className={`fs-6 fw-bold mt-3 mb-1 text-center`}>Clicca sull'immagine per maggiori informazioni</p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )   
}