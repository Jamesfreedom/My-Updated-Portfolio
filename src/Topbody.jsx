import React, { useEffect, useState } from "react";


function Topbody() {

    const skills = [
        "Full-Stack Web Developer",
        "Photo Editor",
        "Cartoon Animator",
        "Community Strategist",
        "Content Writer",
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
            <div data-aos="fade-up" data-aos-duration="5000" className="top-Container">
                <header>

                    <nav className="navbar navbar-light fixed-top">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center text-white">
                                <div className="img-logo-img"></div>
                                <div className="ms-2">
                                    <div><span>Freedom</span> James</div>
                                    <div className="location">Port Harcourt, Nigeria</div>
                                </div>
                            </div>
                            <button className="navbar-toggler p-1 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon bg-white"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">My Portfolio</h5>
                                    <button type="button" className="btn-close bg-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
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
                        </div>
                    </nav>

                </header>


                <div className="profile mt-5">
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
                            <h5>Hi, I'm Echendu Freedom James</h5>
                            <p className="summary">I'm a frontend developer with experience working with a company, delivering high-quality digital solutions. In addition to my development skills, I'm also proficient in photo editing and have a knack for creating engaging content. I'm passionate about community management and currently lead a small community group, where I've honed my skills in moderation and engagement. I'm also enthusiastic about teaching and sharing knowledge with others. With a strong foundation in frontend development and a creative edge, I'm excited to take on new challenges and deliver exceptional results.
                            </p>
                            <div className="media">
                                <div className="fb">
                                    <a href="https://www.facebook.com/freekeyz.jamesii" target="_blank"> <div className="fb-icon"></div> </a>
                                </div>
                                <div className="x">
                                    <a href="https://x.com/Official_EFJ/"> <div className="x-icon"></div> </a>
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
            </div>
        </>
    );
}

export default Topbody;