import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Typewriter } from 'react-simple-typewriter'

import CurriculumVitae from "/media/files/curriculumVitae.pdf";
import Picture from "/media/images/smusi.jpg"

export default function showHomePage() {
    var EmailAddress = 'mailto:alessandro.capurro.iic@gmail.com';
    var LinkedinAccount = 'https://www.linkedin.com/in/alessandro-capurro-abbb10340';
    var GithubLink = 'https://github.com/capurrooalessandro';
    var CVFileName = 'Curriculum Vitae CAPURRO ALESSANDRO';
    return(
        <div>
            <div className="row my-lg-0 my-5">
                <div className="col-lg-5 d-flex justify-content-center mb-lg-0 mb-5">
                    <img src={Picture} alt="Foto"  width="300" height="300" loading='lazy' className='rounded-circle border border-4 mb-lg-0 mb-5'/>
                </div>
                <div className="col-lg-7">
                    <h1 className='fw-normal'><span className='fw-medium'>Ciao</span>, sono <span className='fw-bold  fc-purple'>Alessandro</span>,</h1>
                    <h2 className="fw-normal">Sono un <span className='fw-bold fc-purple'><Typewriter words={["Front-end", "Web"]} loop={0} cursor 
                    cursorStyle='' typeSpeed={70} deleteSpeed={50} delaySpeed={1500}/></span><span className="fw-medium"> Developer.</span></h2>
                    <p className='fs-5 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dolorem itaque, tempora natus obcaecati dolorum perferendis culpa deleniti repudiandae 
                        temporibus autem tempore, incidunt, maiores explicabo quae id delectus minus quis eius.
                    </p>
                    <div className="mt-1 mb-3">
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={EmailAddress}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={LinkedinAccount} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a type="button" className='btn btn-lg btn-outline-light social-btn rounded-circle me-2' href={GithubLink} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <a type='button' className='btn btn-lg px-4 text-center cv-btn btn-light rounded-5' 
                        download={CVFileName} href={CurriculumVitae}> Scarica CV &nbsp;
                        <span><FontAwesomeIcon icon={faFileArrowDown}/></span>
                    </a>
                </div>
            </div>
        </div>
    )   
}