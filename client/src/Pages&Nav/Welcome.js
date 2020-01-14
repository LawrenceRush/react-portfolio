import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

function Welcome() {
    return (
        <section className="welcome-sect" id = "welcome">
            <div className= "say-hi">
            <h1>Hey I'm Lawrence</h1>
            <h2>A web developer</h2>
            </div>
            <div className="down-arrow"><a href= "#projects"><FontAwesomeIcon className="arrow-icon" icon={faChevronDown} /></a></div>
        </section>
    )
}

export default Welcome
