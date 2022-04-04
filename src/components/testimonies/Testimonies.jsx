import React from 'react';
import AVTR1 from "../../assets/avatar1.jpg"
// import AVTR2 from "../../assets/avatar.2jpg"
// import AVTR3 from "../../assets/avatar.j3pg"
// import AVTR4 from "../../assets/avatar.jp4g"

const Testimonies = () => {
    return (
        <section id="testimonies">
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className="client__name">Ernest Achiev</h5>
                        <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo porro corporis minus voluptas veniam deserunt laudantium! Distinctio dignissimos vitae commodi esse blanditiis aperiam deserunt maxime dolores. Officia, esse aliquid.
                        </small>
                    </div>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className="client__name">Ernest Achiev</h5>
                        <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo porro corporis minus voluptas veniam deserunt laudantium! Distinctio dignissimos vitae commodi esse blanditiis aperiam deserunt maxime dolores. Officia, esse aliquid.
                        </small>
                    </div>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className="client__name">Ernest Achiev</h5>
                        <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo porro corporis minus voluptas veniam deserunt laudantium! Distinctio dignissimos vitae commodi esse blanditiis aperiam deserunt maxime dolores. Officia, esse aliquid.
                        </small>
                    </div>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className="client__name">Ernest Achiev</h5>
                        <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo porro corporis minus voluptas veniam deserunt laudantium! Distinctio dignissimos vitae commodi esse blanditiis aperiam deserunt maxime dolores. Officia, esse aliquid.
                        </small>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Testimonies;