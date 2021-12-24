import React from 'react'
import style from './button.module.css'

export default function LinkButton({ className='', text='Click Me', link, target="" }){
    return(
        <div className={`${className} ${style.outer_shell}`}>
            <a href={link} className={style.link} target={target}>{text}</a>
        </div>
    )
}