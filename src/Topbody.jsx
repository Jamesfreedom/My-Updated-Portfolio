import React, { useEffect, useState } from "react";


function Topbody() {

    const skills = [
        "Web3 Content Creator",
        "Web Developer",
        "Mobile Photo Editor",
        "Educational Writer",
        "Cartoon Animator",
    ];

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (isTyping) {
            if (text.length < skills[index].length) {
                timeout = setTimeout(() => {
                    setText(skills[index].slice(0, text.length + 1));
                }, 150);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
            }
        } else {
            timeout = setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % skills.length);
                setText("");
                setIsTyping(true);
            }, 1000);
        }

        return () => clearInterval(timeout);
    }, [text, index, isTyping, skills]);






    return (
        <>
            {/* <div class="collapse" id="navbarToggleExternalContent">
                <div class=" p-4">
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ps-4">
                            <li className="nav-item">
                                <a className="nav-link active text-white w-1" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="./contact_me.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <nav class="navbar navbar-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav> */}

            <div data-aos="fade-up" data-aos-duration="5000" className="top-Container">
                <div className="profile">
                    <div>
                        <div className="fs-1">
                            Meet FJ: <br />
                            <p className="skills">{text} </p>
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="photo">
                            <div className="photo-id-img"></div>
                        </div>
                        <div className="my-details">
                            <h5>Hi, I'm Freedom James</h5>
                            <p className="summary">Experienced Web3 content creator specializing in writing, cartoon animations, Decentralized finance (DeFi), AI agents, Front-end web development. I'm also passionate about community management and currently lead a small community group, where I've honed my skills in moderation and engagement. I'm also enthusiastic about teaching and sharing knowledge with others. I contribute to innovative blockchain projects and also craft compelling narratives in the crypto space.
                            </p>
                            <div className="media">
                                <div className="x">
                                    <a href="https://x.com/BillionaireFJ"> <div className="x-icon"></div> </a>
                                </div>
                                <div className="ig">
                                    <a href="https://www.instagram.com/freedomjames_/" target="_blank"> <div className="ig-icon"></div> </a>
                                </div>
                                {/* <div className="lin">
                                    <a href="https://ng.linkedin.com/in/freedom-james-echendu"> <div className="lin-icon"></div> </a>
                                </div> */}
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
            </div>
        </>
    );
}

export default Topbody;