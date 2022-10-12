import React from 'react'

const FrontEnd = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title"> Frontend Development </h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name"> HTML/CSS </h3>
                            <span className="skills__level"> Advanced</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JavaScript/Typescript</h3>
                            <span className="skills__level">  Intermediate </span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap , Material Ui, TailwindCss </h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>
                        <div>
                            <h3 className="skills__name">Cross-Browser Development</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Testing/Debugging</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git/Version Control</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FrontEnd