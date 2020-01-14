import React,{ useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function MakeCard({props}) {
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <Card style={{ width: '10rem'  , background:'rgba(255, 0, 0, 0.1)'}}>
     <div style={{ height:'15vh !important' }}>      
  <Card.Img style={{ maxWidth:"150%", maxHeight:'150%' }} variant="top" src={props.img} />
  </div> 
  <Card.Body  style={{ height:'100 !important' }} >
<Card.Title style={{ color:'white' }} >{props.name}</Card.Title>
    
    <a href={props.url}><Button variant="primary">Visit</Button>
</a>
    
  </Card.Body>
</Card>
    )
}

export default MakeCard
