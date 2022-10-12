import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
const Skills = () => {
    return (
        <section className="S section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>
            <div className="skills__container container grid">
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    )
}

export default Skills