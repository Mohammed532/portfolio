import React from 'react'
import style from './header.module.css'

export default function Header({text='Header'}) {
    return(
        <div className={style.header}>
            <h1>{text}</h1>
        </div>
    )
}