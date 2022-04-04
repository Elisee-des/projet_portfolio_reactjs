import React from 'react';
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experiences">
            <h5>what Skill I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                <h3>Frontend Developpement</h3>
                    <div className="experience__content">
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Reactjs</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Tailwind</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End Frontend */}

                {/* Backend */}
                <div className="experience__backend">
                    <h3>Backend Developpement</h3>
                    <div className="experience__content">
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Nodejs</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>MongoBD</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>PHP</h4>
                            <small className="text-light">Intermediated</small>
                           </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details" >
                            <BsPatchCheckFill className="experience__detail-icon"  />
                            <div>
                            <h4>Python</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Experience;