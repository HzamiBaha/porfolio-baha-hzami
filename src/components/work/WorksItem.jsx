import React from 'react'

const WorksItem = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title"> {item.title} </h3>
            {item.category === "web" ?

                <div className="work__links">
                    <a href={item.link} className="work__button" target="_blank"> Demo
                        <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
                    <a href={item.gitlink} className="work__repo" target="_blank">
                        <i class="uil uil-github work__repo-icon"></i>
                    </a>
                </div>
                :
                <a href={item.link} className="work__button" target="_blank"> More Details
                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>

            }

        </div>
    )
}

export default WorksItem