import React from 'react';
import { BiCheck } from "react-icons/bi"
import "./services.css"

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offert</h5>
            <h2>Services</h2>

            <div className="container services__container">
                {/* UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h2>UI/UX Design</h2>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END UI/UX */}

                {/* WEB DEVELOPPEMENT */}
                <article className="service">
                    <div className="service__head">
                        <h2>Web Developpement</h2>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END WEB SITE */}

                {/* CONTENT CREATION */}
                <article className="service">
                    <div className="service__head">
                        <h2>Content Creation</h2>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END CONTENT CREATION */}
            </div>
        </section>
    );
};

export default Services;