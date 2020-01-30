import React from 'react'
import Card from '../components/Card'
import NoteImg from "../assets/Capture.PNG"
import ASImg from "../assets/AppStorePhoto.PNG"
import BTSImg from "../assets/BTS.PNG"
import CodeTestImg from "../assets/CodeTestImg.PNG"

const projects = [
    {
        name: 'Note Taker',
        img: NoteImg,
        url: "https://ancient-tundra-66128.herokuapp.com/"
    },
    {
        name: 'Appstore',
        img: ASImg,
        url: "https://lit-bastion-21079.herokuapp.com/"
    },
    {
        name: 'Breach the Summit',
        img: BTSImg,
        url: "https://lawrencerush.github.io/BreachTheSummit/" 
    },
    {
    name: 'Code Test',
    img: CodeTestImg,
    url: "https://gentle-citadel-16427.herokuapp.com/"
    }
]

function Projects() {
    const grid = {
        height: '100%',
        padding: "20px",
        display: "Grid",
        gridTemplateColumns: 'Auto Auto',
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
