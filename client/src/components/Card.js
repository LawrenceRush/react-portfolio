import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useSpring, animated} from 'react-spring'

function MakeCard({ props }) {
    const [hover, setHover]= useState(false)
    const cardStyle = {
        height: "40vh",
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        color: "white",

    }

    const imgStyle = {
        height: '20vh',
        objectFit: 'contain',
    }

    const cardBodyStyle = {
        marginTop: "10px",
        textAlign: "Center",
        display: 'grid',
        gridTemplateColumns: "auto auto auto",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft:"15px",
        paddingRight:"15px",
    }

    const alignmentDivStyle = {
        display: 'grid',
        marginRight: 0,
        height: "100%",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto",
        fontSize: "32px"
        
    }


    const fadeIn = useSpring({
        color: "orange", 
        display: "flex",
        justifyContent: "center",
        flexDirection:" column",
        fontSize: "3em",
        opacity: 0,
        opacity: hover ? 1 : 0
    })


    return (
        <a onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}><div style={cardStyle} class="card">
            <img style={imgStyle} src={props.img} />
            <div style={cardBodyStyle} class="cardBody">
                <animated.span style = {fadeIn}> 	&lt; </animated.span>
                <div class="alignmentDiv" style = {alignmentDivStyle}>
                    <div style = {{display:"inline"}}> {props.name}</div>
                    <div><Button style={{ marginTop: "5px", fontSize:"32px" }} variant="primary">Visit</Button></div>
                </div>
                <animated.span style = {fadeIn}> 	&gt; </animated.span>
            </div>
        </div>
        </a>
    )
}

export default MakeCard

{/* <Card style={{ background:'rgba(255, 0, 0, 0.1)'}}>
//      <div style = {{height: '20vh'}}>      
//   <Card.Img style={{height: '20vh', objectFit:'contain' }} variant="top" src={props.img} />
//   </div> 
//   <Card.Body  style={{ textAlign:'center' }} >
      
// <Card.Title style={{ color:'white' }} >{props.name}</Card.Title>
    
//     <a href={props.url}><Button variant="primary">Visit</Button>
// </a>
    
//   </Card.Body>
// </Card> */}