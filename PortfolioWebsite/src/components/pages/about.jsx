import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Typewriter } from 'react-simple-typewriter'

import CurriculumVitae from "/media/files/curriculumVitae.pdf";
import Picture from "/media/images/smusi.jpg"

export default function showAboutPage() {
    const [ResizePhotoLg, setResizePhotoLg] = useState(window.innerWidth <= 991)
    const [ResizePhotoMobile, setResizePhotoMobile] = useState(window.innerWidth <= 539)

    useEffect(() =>{
        const handleResize = () => {
            setResizePhotoLg(window.innerWidth <= 991)
            setResizePhotoMobile(window.innerWidth <= 539)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    var EmailAddress = 'mailto:alessandro.capurro.iic@gmail.com';
    var LinkedinAccount = 'https://www.linkedin.com/in/alessandro-capurro-abbb10340';
    var GithubLink = 'https://github.com/capurrooalessandro';
    var CVFileName = 'Curriculum Vitae CAPURRO ALESSANDRO';
    return(
        <div>
            <div className="row my-lg-0 my-5">
                <div className="col-lg-7 mb-lg-0 mb-5 pt-lg-3">
                    <h1 className='fw-normal mt-5 mb-3'>Chi sono e cosa faccio:</h1>
                    <p className='fs-5 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dolorem itaque, tempora natus obcaecati dolorum perferendis culpa deleniti repudiandae 
                        temporibus autem tempore, incidunt, maiores explicabo quae id delectus minus quis eius.
                    </p>
                </div>
                <div className="col-lg-5 d-flex justify-content-center">
                    <img src={Picture} alt="Foto"  width={`${ResizePhotoLg ? `${ResizePhotoMobile ? "300" : "320"}` : "350"}`} 
                    height={`${ResizePhotoLg ? `${ResizePhotoMobile ? "300" : "320"}` : "350"}`} loading='lazy' 
                    className='rounded-5 border border-4 mb-lg-0 mb-5'/>
                </div>
            </div>
        </div>
    )   
}