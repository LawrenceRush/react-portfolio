import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiJqueryLogo } from 'react-icons/di';
import {DiMysql}from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { animated, useTrail, config,  } from 'react-spring';

function MakeSkills() {
const skillsSty = {
    position: "absolute",
  top: "80%",
    }

    const nodeIcon = true ?  <FaNodeJs/>  : null
    const mongoIcon = true ?  <DiMongodb/> : null
    const reactIcon = true ?   <FaReact/> : null
    const jsIcon = true ?   <IoLogoJavascript/> : null
    const jqueryIcon = true ?  <DiJqueryLogo/> : null
    const mySqlIcon = true ?  <DiMysql/> : null
    const bootStrapIcon = true ?  <FaBootstrap/> : null

    const icons = [nodeIcon, mongoIcon, reactIcon, jsIcon, jqueryIcon, mySqlIcon, bootStrapIcon]
    const skillNames = ["Node", "MongoDB", "React", "Javascript", "Jquery", "MySql", "Bootstrap"]

    const [on, toggle] = useState(false);

    const springs = useTrail(icons.length, {
        from:{
            transform: "translate3d(250vh,0,0)"
          },
         transform: toggle ? "translate3d(0vh,0,0)":"translate3d(250vh,0,0)"
    });

    useEffect(() => {
        toggle(true)
    }, [])


    return (
        <div style = {skillsSty}>
            Some of my skills:
            <br/>
            {springs.map((animation, index) => (
            <animated.div style={animation} key={index}>{icons[index]}{skillNames[index]}</animated.div>
      ))}
          
        </div>
    )
}

export default MakeSkills
