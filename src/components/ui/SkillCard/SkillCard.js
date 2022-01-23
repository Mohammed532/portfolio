import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import style from './skill_card.module.css'

export default function SkillCard({ className='', icon, heading, listItems }){
    const [targetSkill, updateTargetSkill] = useState({id: null, targeted: false})
    const [skillInfo, updateSkillInfo] = useState(<div></div>)

    const skillFocus = (e) => {
        // updateTargetSkill({...targetSkill, id: e.target.id})
        // if (targetSkill.targeted) {closeSkillInfo(); updateTargetSkill({...targetSkill, targeted: false})}
        // else {openSkillInfo(); updateTargetSkill({...targetSkill, targeted: true})}
    }

    const openSkillInfo = (e) => {
        // update skillInfo with info
        updateSkillInfo([e.target.id].info)
        console.log(skillInfo);
        // make list elements hidden
        // change bullet img to arrow
        // make target element visible
        // move target element to top of div
        // move info div below target element
        // make info div visible
    }

    const closeSkillInfo = (e) => {
        // make info hidden
        // replace bullet
        // move target back to origin
        // make list elements visible
    }



    return(
        <div className={`${className} ${style.body}`}>
            <div className={style.heading}>
                <div className={style.icon}>
                    <img src={icon} />
                </div>
                <h2>{heading}</h2>
            </div>
            {/* <p className={style.hint}>Click each skill to learn more</p> */}
            <div className={style.list}>
                <ul>
                    {listItems.map(({skill, info}, i) => 
                        <li key={i} id={i} onClick={openSkillInfo}>{skill}</li>
                        
                    )}
                </ul>
            </div>
        </div>
    )
}
