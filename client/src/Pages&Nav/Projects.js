import React,{ useState, useEffect} from 'react'
import Card from '../components/Card'
import NoteImg from "../assets/Capture.PNG"
import ASImg from "../assets/AppStorePhoto.PNG"
import BTSImg from "../assets/BTS.PNG"
import CodeTestImg from "../assets/CodeTestImg.PNG"

const projects = [
    {
        name: 'Notes',
        img: NoteImg,
        url: "https://ancient-tundra-66128.herokuapp.com/",
        gitUrl: "https://github.com/LawrenceRush/noteTaker"
    },
    {
        name: 'Appstore',
        img: ASImg,
        url: "https://lit-bastion-21079.herokuapp.com/",
        gitUrl: "https://github.com/LawrenceRush/heroku-appstore"
    },
    {
        name: 'Breach the Summit',
        img: BTSImg,
        url: "https://lawrencerush.github.io/BreachTheSummit/", 
        gitUrl: "https://github.com/LawrenceRush/BreachTheSummit"
    },
    {
    name: 'Code Test',
    img: CodeTestImg,
    url: "https://gentle-citadel-16427.herokuapp.com/",
    gitUrl: "https://github.com/LawrenceRush/reactCodeTest"
    }
]

function Projects() {

    const vw = Math.max(document.documentElement.clientWidth, window.innerclientWidth || 0);

    const grid = {
        marginTop: '10vh',
        height: '100%',
        padding: "5vh",
        display: "Grid",
        gridTemplateColumns: 'repeat(4, 36vh)',
        gridTemplateRows: '40vh 40vh',
        gridColumnGap: "10px",
        gridRowGap: "10px",
        justifyContent: "space-around"
        
    }
    const tabGrid = {
        marginTop: '10vh',
        height: '100%',
        padding: "5vh",
        display: "Grid",
        gridTemplateColumns: 'repeat(2, 36vh)',
        gridTemplateRows: '40vh 40vh',
        gridColumnGap: "10px",
        gridRowGap: "10px",
        justifyContent: "space-around"
        
    }
    const phoneGrid = {
        marginTop: '10vh',
        height: '100%',
        padding: "5vh",
        display: "Grid",
        gridTemplateColumns: 'repeat(1, 36vh)',
        gridTemplateRows: '40vh 40vh',
        gridColumnGap: "10px",
        gridRowGap: "10px",
        justifyContent: "space-around"
    
    }

    

    

    
   


    return (
        <section className="projects-con" id = "projects">

          {vw > 1440 && 
            <div style = {grid}>
                {projects.map((project, index) => <Card key={index} props = {project}/>)}
            </div>
            }
             { vw < 1440 &&  vw > 768 &&
            <div style = {tabGrid}>
                {projects.map((project, index) => <Card key={index} props = {project}/>)}
            </div>
            }
             { vw < 768 &&
            <div style = {phoneGrid}>
                {projects.map((project, index) => <Card key={index} props = {project}/>)}
            </div>
            }

        </section >
    )
}

export default Projects
