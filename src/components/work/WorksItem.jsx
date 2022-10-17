import React from 'react'

const WorksItem = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title"> {item.title} </h3>
            {item.category === "web" ?

                <div className="work__links">
                    <a href="" className="work__button"> Demo
                        <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
                    <a href="" className="work__repo">
                        <i class="uil uil-github work__repo-icon"></i>
                    </a>
                </div>
                :
                <a href="" className="work__button"> More Details
                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>

            }

        </div>
    )
}

export default WorksItem