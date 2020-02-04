import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Skills from "../components/Skills"
function Welcome() {
    return (
        <section className="welcome-sect" id = "welcome">
            <div className= "say-hi">
            <h1 style = {{fontSize:"5vh"}}>Hey, I'm Lawrence </h1>
            <h2 style = {{fontSize:"4vh"}}>A web developer</h2>
            </div>
            <Skills />
            <div className="down-arrow"><a href= "#projects"><FontAwesomeIcon className="arrow-icon" icon={faChevronDown} /></a></div>
        </section>
    )
}

export default Welcome
