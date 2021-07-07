import React, {useEffect, useState} from 'react'
import { throttle } from 'lodash'
import { NavLink } from 'react-router-dom'
import * as ROUTES from './../../../utils/constants/routes'
import styles from './navbar.module.css'

export default function Navbar(){
    const [page_y, setPageY] = useState(0)
    useEffect(() => {
        document.addEventListener('scroll', throttle(e => {
            setPageY(Math.round(window.scrollY));
        }, 500))
        activateStickyHeader()
    })

    const activateStickyHeader = () => {
        let stickyHeader = document.querySelector(`.${styles.sticky_header}`)
        if (page_y >= 150) {
            stickyHeader.classList.add(styles.activated)
        }
        else if (page_y < 150) {
            stickyHeader.classList.remove(styles.activated)
        }
    }

    return (
        <div>
            <div className={styles.sticky_header}>
                <nav className={styles.sticky_nav}>
                    <NavLink to={ROUTES.HOME}>HOME</NavLink>
                    <NavLink to={ROUTES.RESUME}>RESUME</NavLink>
                    <NavLink to={ROUTES.PROJECTS}>PROJECTS</NavLink>
                    <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
                </nav>
            </div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink to={ROUTES.HOME}>HOME</NavLink>
                    <NavLink to={ROUTES.RESUME}>RESUME</NavLink>
                    <NavLink to={ROUTES.PROJECTS}>PROJECTS</NavLink>
                    <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
                </nav>
            </header>
        </div>
    )
}