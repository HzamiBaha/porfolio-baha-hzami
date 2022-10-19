import React, { useState } from 'react'
import "./service.css"

const Service = () => {
    const [toggleState, settoggleState] = useState(0)
    const toggleTab = (index) => {
        settoggleState(index);
    }
    return (

        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offre</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title"> FrontEnd <br /> Engineer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    <div className={toggleState == 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">FrontEnd Engineer</h3>
                            <p className="services__modal-description">
                                Service with almost 2 years of experience. Providing quality work to clients and companies
                            </p>
                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I focus on SEO and page speed optimization.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create features that improve the user experience.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I test UI components.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I Ensure that the web design is mobile-friendly.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I write reusable code for later usage.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I am good at problem solving.
                                    </p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I worked(and still do) with react. js next. js and vite.js
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title"> UX / UI <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    <div className={toggleState == 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"> UX / UI Designer</h3>
                            <p className="services__modal-description">
                                Service with almost 2 years of experience. Providing quality work to clients and companies
                            </p>
                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I collect and assess user requirements.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I use storyboards and process flows to illustrate design concepts.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create visual user interface components such as menus, tabs, and widgets.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create page navigation buttons as well as search boxes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I make layout changes depending on user input.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I Adhere to style standards on fonts, colors and images                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-brush-alt services__icon"></i>
                        <h3 className="services__title">Graphic <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right"></i>
                    </span>
                    <div className={toggleState == 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Graphic Designer</h3>
                            <p className="services__modal-description">
                                Service with almost 3 years of experience. Providing quality work to clients and companies
                            </p>
                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create preliminary drafts and propose concepts.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create logos and other designs by hand or with a software.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I use the proper colors and layouts, for each design.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I test graphics in a variety of mediums.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create images depending on specifications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I revise designs in response to feedback.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service