import React from 'react'
import style from './divider.module.css'

export default function Divider({className=''}) {
    return (
        <div className={`${className} ${style.div}`} ></div>
    )
}