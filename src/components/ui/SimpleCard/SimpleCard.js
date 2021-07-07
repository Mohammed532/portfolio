import React from 'react'
import style from './simple_card.module.css'

export default function SimpleCard({ className, children }){
    return(
        <div className={`${className} ${style.outer_shell}`}>
            <div className={style.body}>
                {children}
            </div>
        </div>
    )
}