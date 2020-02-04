import React from 'react'
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
    const grid = {
        height: '100%',
        padding: "5vh",
        display: "Grid",
        gridTemplateColumns: 'Auto Auto Auto Auto',
        gridTemplateRows: 'Auto Auto',
        gridColumnGap: "10px",
        gridRowGap: "10px",
        justifyItems: 'center',
        alignItems: 'center'
    }
    return (
        <section className="projects-con" id = "projects">
            <div style = {grid}>
                {projects.map((project, index) => <Card key={index} props = {project}/>)}
            </div>
        </section >
    )
}

export default Projects
