import React, { useEffect, useState } from "react";


function Topbody() {
    const skills = ["Frontend Web Developer", "Photo Editor", "Animator"];
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [skills.length]);


    return (
        <>
            <div data-aos="fade-up" data-aos-duration="5000" className="top-Container">
                <header>
                    <h3>Port<span>folio</span></h3>

                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center order-lg-2">
                                <a className="cv-btn me-4" href="./assets/doc/FreedomCV.pdf" download="FreedomCV.pdf">
                                    <button>Download CV</button>
                                </a>
                                <hr />
                                <span class="navbar-brand text-white d-lg-none me-1">Menu</span>
                                <button class="navbar-toggler ms-2 bg-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
                                    <span class="navbar-toggler-icon bg-white "></span>
                                </button>

                            </div>
                            <div class="collapse navbar-collapse order-lg-1" id="navbarTogglerDemo02">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ps-4">
                                    <li class="nav-item">
                                        <a class="nav-link active text-white w-1" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#">Skills</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#">Contact</a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </nav>

                </header>


                <div className="profile">
                    <div className="photo">
                        <div className="photo-id-img"></div>
                    </div>
                    <div className="my-details">
                        <h6>Hello, I am</h6>
                        <h2>Echendu Freedom James</h2>
                        <div>
                            <h5>And I'm a</h5>
                            <h4 id="skills">Frontend Web Developer</h4>
                        </div>
                        <p>A passionate Front-end developer that focuses on creating responsive websites that resolves issues.</p>
                        <div className="media">
                            <div className="fb">
                                <a href="https://www.facebook.com/freekeyz.jamesii" target="_blank"> <div className="fb-icon"></div> </a>
                            </div>
                            <div className="x">
                                <a href="https://x.com/freedomjames_/"> <div className="x-icon"></div> </a>
                            </div>
                            <div className="ig">
                                <a href="https://www.instagram.com/freedomjames_/" target="_blank"> <div className="ig-icon"></div> </a>
                            </div>
                            <div className="lin">
                                <a href="https://ng.linkedin.com/in/freedom-james-echendu"> <div className="lin-icon"></div> </a>
                            </div>
                            <div className="git">
                                <a href="https://github.com/Jamesfreedom?tab=repositories"> <div className="git-icon"></div> </a>
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="mailto:freedomjames06@gmail.com?subject=Project Inquiry"> <button className="hire-me">Hire Me</button> </a>
                            <a href="https://wa.me/+2349035125317"> <button className="contact-me">Contact Me</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbody