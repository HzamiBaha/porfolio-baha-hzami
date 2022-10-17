import React, { useState, useEffect } from 'react'
import { projextsNav, Data } from './Data'
import WorksItem from './WorksItem'

const Works = () => {
    const [item, setitem] = useState({ name: "all" })
    const [projects, setprojects] = useState([])
    const [active, setactive] = useState(0)

    useEffect(() => {
        if (item.name === "all") {
            setprojects(Data);
        }
        else {
            const newProjects = Data.filter((project) => {
                return project.category === item.name;
            })
            setprojects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setitem({ name: e.target.textContent })
        setactive(index)
    }

    return (
        <>
            <div className="work__filters">
                {
                    projextsNav.map((item, index) => {
                        return (
                            <span
                                onClick={(e) => {
                                    handleClick(e, index)
                                }}
                                className={`${active === index ? "active-work" : ""} work__item`}
                                key={index}
                            >
                                {item.name}
                            </span>
                        )
                    })
                }
            </div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItem item={item} key={item.id} />
                })}
            </div>
        </>
    )
}

export default Works