import React from 'react'
import { Navbar, Header, LinkButton } from './../../ui'
import styles from './resume.module.css'
import resume from './../../../res/Portfolio_Resume.pdf'

export default function Resume() {
    return (
        <div className={styles.resume}>
            <Navbar />
            <Header text='Resume'/>
            <LinkButton className={styles.resume_link} link={resume} text="Full Resume" target="_blank" />
            <h2>Skills</h2>
            <h2>Education</h2>
            <h2>Experience</h2>
        </div>
    )
}