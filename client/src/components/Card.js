import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useSpring, animated} from 'react-spring'

function MakeCard({ props }) {

    const [hover, setHover]= useState(false)
    const cardStyle = {
        height: "40vh",
        width: "36vh",
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        color: "white",

    }

    const imgStyle = {
        height: '20vh',
        width: "100%",
        objectFit: 'fill',
    }

    const cardBodyStyle = {
        
        textAlign: "Center",
        display: 'grid',
        gridTemplateColumns: "8vh 20vh 8vh  ",
        gridTemplateRows: "5vh 7vh 7vh",
        justifyContent: "space-between",
        alignItems: "center",
        
    }
    const linkButtonStyle = { 
        fontSize:"2vh" 
    }
    
    const cardTitleStyle = {
        display:"inline",
        gridColumnStart:1,
        gridColumnEnd: 4,
        gridRowStart: 1,
        gridRowEnd: 1,
    }
    const leftBracket = {
        gridColumnStart:1,
        gridColumnEnd: 2,
        gridRowStart: 2,
        gridRowEnd: 4,
    }

    const rightBracket = {
        gridColumnStart:3,
        gridColumnEnd: 4,
        gridRowStart: 2,
        gridRowEnd: 4,
    }
    const gitBtn = {
        gridColumnStart:2,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 3,
    }
    const siteBtn = {
        gridColumnStart:2,
        gridColumnEnd: 3,
        gridRowStart: 3,
        gridRowEnd: 4,
    }

    const bracketFadeIn = useSpring({
        height: "14vh",
        lineHeight: "14vh",
        color: "orange", 
        fontSize: "10vh",
        lineHeight: "9vh",
        opacity: 0,
        opacity: hover ? 1 : 0
    })


    return (
        <a onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}><div style={cardStyle} class="card">
            <img style={imgStyle} src={props.img} />
            <div style={cardBodyStyle} class="cardBody">
               <div style = {leftBracket}> <animated.div style = {bracketFadeIn}> 	&lt; </animated.div> </div>
                    <div style = {cardTitleStyle}> {props.name}</div>
                    <div style = {siteBtn}><a href = {props.url}><Button style={linkButtonStyle} variant="primary">Website</Button></a></div>
                    <div style = {gitBtn}><a href = {props.gitUrl}><Button style={linkButtonStyle} variant="dark">Repository</Button></a></div>

                
                <div  style = {rightBracket} ><animated.div style = {bracketFadeIn}> 	&gt; </animated.div></div>
            </div>
        </div>
        </a>
    )
}

export default MakeCard

