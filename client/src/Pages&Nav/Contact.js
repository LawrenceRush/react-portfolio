import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faenvelope} from '@fortawesome/free-solid-svg-icons'
//import {falinkedin} from '@fortawesome/free-solid-svg-icons'
var FontAwesome = require('react-fontawesome')

function Contact() {
    console.log(FontAwesomeIcon)
    return (
       <section className = "contact-con" id = "contact">
           <div className="contact-div">
               <h1 style = {{fontSize:"5vh"}} >Reach Out!</h1>
               <h2 style = {{fontSize:"4vh"}} >I'd be happy to hear from you</h2>
               <ul style = {{fontSize:"3vh"}} className="link-list">
                   <li><a className="link-a" href="https://github.com/LawrenceRush" target="blank" ><FontAwesome className="link-icon" name="fab fa-github" size="2x"/>Github</a></li>
                   <li><a className="link-a" href="https://www.linkedin.com/in/lawrence-rush-88855215a/" target="blank" ><FontAwesome className="link-icon" name="fab fa-linkedin" size="2x"/>Linked In</a></li>
                   <li><a className="link-a" href="mailto:l.rush7@gmail.com" target="blank" ><FontAwesome className="link-icon" name="fab fa-envelope" size="2x"/>Email</a></li>
                </ul>
           </div>
       </section>
    )
}

export default Contact
