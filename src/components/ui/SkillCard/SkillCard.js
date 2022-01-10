import React from 'react'
import style from './skill_card.module.css'

export default function SkillCard({ className='', icon, heading, listItems }){
    
    return(
        <div className={`${className} ${style.body}`}>
            <div className={style.heading}>
                <div className={style.icon}>
                    <img src={icon} />
                </div>
                <h2>{heading}</h2>
            </div>
            <p className={style.hint}>Click each skill to learn more</p>
            <div className={style.list}>
                <ul>
                    {listItems.map(({skill, infoText}, i) => 
                        <li key={i}>{skill}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}