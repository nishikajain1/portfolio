import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";
import "../styles/mediaQuery.css"
import logo from "../images/GirlLogo.gif"
import profilePic from "../images/profileImg.jpg"
import Nishika_Jain_Resume from "../resume/Nishika_Jain_Resume.pdf"
import html from "../images/techLogo/html.png"
import css from "../images/techLogo/css.png"
import js from "../images/techLogo/js.png"
import react from "../images/techLogo/react.png"
import chakraUi from "../images/techLogo/chakraUi.png"
import git from "../images/techLogo/git.png"
import github from "../images/techLogo/github.png"
import netlify from "../images/techLogo/netlify.png"
import firebase from "../images/techLogo/firebase.png"
import redux from "../images/techLogo/redux.png"
import projectBanner from "../images/projectBanner.png"
import projectBanner2 from "../images/projectBanner2.png"

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeDownload = () => {
        window.open("https://drive.google.com/file/d/1FpxWn5Fp8nuzyvxtKFm0Vz1Mw1qdEaGS/view?usp=drive_link")
        const link = document.createElement('a');
        link.href = Nishika_Jain_Resume;
        link.download = 'Nishika_Jain_Resume.pdf';
        link.click();
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="portfolio-container">
            <div className="background-overlay"></div>

            <div className="content">
                {/* Navigation Bar */}
                <nav className="navbar sticky-nav">
                    <h1 className="logo">Nishika</h1>
                    <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={`nav-links ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#" onClick={handleResumeDownload}>Resume</a></li>
                    </ul>
                </nav>

                {/* Hero Section */}
                <section id="home" className="hero">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I'm Nishika Jain
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Frontend Developer
                    </motion.p>
                    <motion.div
                        className="logopic"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </motion.div>
                </section>

                {/* About me section */}
                <section id="about" className="about">
                    <h2>About Me</h2>
                    <div className="about-flex">
                        <img
                            src={profilePic}
                            alt="Profile"
                        />
                        <p>
                            I'm a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, React, and more. I have also completed a full-time Frontend Development course at Masai School to enhance my skills and deepen my expertise.
                        </p>
                    </div>
                    
                    <button className="resume-button" onClick={handleResumeDownload}>Download Resume</button>
                </section>

                {/* Skills Section */}
                <section id="skills" className="skills">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-list">
                        <div className="skill-item" data-skill="HTML"><img src={html} alt="HTML" /></div>

                        <div className="skill-item" data-skill="CSS"  ><img src={css} alt="css" /></div>

                        <div className="skill-item" data-skill="JS" ><img src={js} alt="js" /></div>

                        <div className="skill-item" data-skill="React"><img src={react} alt="react" /></div>

                        <div className="skill-item" data-skill="Chakra UI"><img src={chakraUi} alt="chakraUi"/></div>

                        <div className="skill-item" data-skill="Github"><img src={github} alt="github"/></div>

                        <div className="skill-item" data-skill="Git" ><img src={git} alt="git" /></div>

                        <div className="skill-item" data-skill="Netlify"><img src={netlify} alt="netlify"/></div>         

                        <div className="skill-item" data-skill="Redux"><img src={redux} alt="redux" /></div>  

                        <div className="skill-item" data-skill="Firebase"><img src={firebase} alt="firebase" /></div>                 
                    </div>
                </section>

                {/* Projects Section 1 */}
                <section id="projects" className="project-banner">
                    <h2>Projects</h2>
                    <div className="project-detail">
                        <h3>Chai-iayah</h3>
                        <p>A celebration of chai culture, inspired by the warm and inviting call of local chaiwalas that resonates in every corner of India. This platform is dedicated to the love of chai, coffee, and delightful snacks that bring people together. Explore a world where every sip tells a story steeped in tradition, healing, and comfort. From the rich aroma of freshly brewed chai to a variety of accompaniments like biscuits, snacks, and more, we aim to create an experience that feels like home. Find your love for food and discover the essence of India’s chai heritage, brewed to perfection just for you.</p>
                        
                        <div className="project-tech-cont">
                            <div className="project-tech"><img src={html} alt="HTML" /></div>
                            <div className="project-tech" ><img src={css} alt="css" /></div>
                            <div className="project-tech" ><img src={js} alt="js" /></div>
                        </div>
                        <br />
                    </div>
                    <div className="project-list">
                        <div className="project-item">
                            <img src={projectBanner} alt="projectBanner" />
                    
                    <div className="project-links">
                                <a href="https://nishikajain1.github.io/Chai-iayah/" target="_blank" rel="noopener noreferrer" >Live <FaExternalLinkAlt className="icon" /></a>
                                <a href="https://github.com/nishikajain1/Chai-iayah" target="_blank" rel="noopener noreferrer" >Github <FaGithub className="icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section 2 */}
                <section id="projects2" className="project-banner">
                    
                    <div className="project-detail2">
                        <h3>NomadNest</h3>
                        <p>NomadNest is a platform designed to redefine travel experiences, offering travelers a seamless way to find and book unique accommodations worldwide. Inspired by the spirit of adventure and the comfort of home, NomadNest bridges the gap between wanderlust and luxury, providing handpicked stays tailored to every traveler’s needs.
                            NomadNest is your gateway to extraordinary stays across the world. Whether you're looking for cozy cabins, beachfront villas, or city apartments, we bring you a carefully curated selection of accommodations that promise comfort and authenticity. With easy navigation, secure booking options, and a variety of categories, finding your next perfect stay has never been easier!</p>

                        <div className="project-tech-cont">
                            <div className="project-tech"><img src={html} alt="HTML" /></div>
                            <div className="project-tech" ><img src={css} alt="css" /></div>
                            <div className="project-tech" ><img src={js} alt="js" /></div>
                            <div className="project-tech" ><img src={react} alt="js" /></div>
                            <div className="project-tech" ><img src={redux} alt="js" /></div>
                            <div className="project-tech" ><img src={chakraUi} alt="js" /></div>
                            <div className="project-tech" ><img src={firebase} alt="js" /></div>
                        </div>
                        <br />
                    </div>
                    <div className="project-list">
                        <div className="project-item">
                            <img src={projectBanner2} alt="projectBanner" />

                            <div className="project-links">
                                <a href="https://nomad-nest-firebase.web.app/" target="_blank" rel="noopener noreferrer" >Live <FaExternalLinkAlt className="icon" /></a>
                                <a href="https://github.com/nishikajain1/NomadNest" target="_blank" rel="noopener noreferrer" >Github <FaGithub className="icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact">
                    <h2 className="section-title">Connect with Me</h2>
                    <div className="contact-details">
                        <p>Phone: +91 8962356256</p>
                        {/* <p>Email: nishikajain199s@gmail.com</p> */}

                        <a href="mailto:nishikajain199s@gmail.com?subject=Hello%20Nishika" target="_blank" rel="noopener noreferrer" className="email-link">
                            <p>Email: nishikajain199s@gmail.com</p>
                        </a>

                        <p>Location: Indore, India</p>
                    </div>
                    
                    <div className="contact-links">
                        <motion.a href="https://github.com/nishikajain1" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaGithub className="icon" />
                        </motion.a>
                        <motion.a href="http://www.linkedin.com/in/nishika-jain-8a63a7251" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaLinkedin className="icon" />
                        </motion.a>
                        <motion.a href="mailto: nishikajain199s@gmail.com" whileHover={{ scale: 1.3 }}>
                            <FaEnvelope className="icon" />
                        </motion.a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    &copy; {new Date().getFullYear()} Nishika Jain. All rights reserved.
                </footer>
            </div>
        </div>
    );
}