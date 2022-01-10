import React from 'react'
import { Navbar, Header, LinkButton, SkillCard } from './../../ui'
import { codingLangs, webDevSkills, opSys } from '../../../utils/skills'
import styles from './resume.module.css'
import coding_icon from './../../../res/imgs/coding_icon.png'
import web_icon from './../../../res/imgs/web_icon.png'
import os_icon from './../../../res/imgs/os_icon.png'
import resume from './../../../res/Portfolio_Resume.pdf'

export default function Resume() {
    return (
        <div className={styles.resume}>
            <Navbar />
            <Header text='Resume'/>
            <LinkButton className={styles.resume_link} link={resume} text="Full Resume" target="_blank" />
            <div className={styles.res_info}>
                {/* EDUCATION */}
                <h2>Education</h2>
                <section>
                    <p>Howard University</p>
                    <p>Aug 2020 - May 2024</p>
                </section>
                <p>BS in Computer Engineering</p>
                <p>3.88</p>

                {/* SKILLS */}
                <h2 className={styles.skill_header}>Skills</h2>
                <div className={styles.skill_cards}>
                    <SkillCard icon={coding_icon} heading='Coding Languages' listItems={codingLangs}/>
                    <SkillCard icon={web_icon} heading='Web Dev' listItems={webDevSkills}/>
                    <SkillCard icon={os_icon} heading='Operating Systems' listItems={opSys}/>
                </div>

                {/* EXPERIENCE */}
                <h2>Experience</h2>
            </div>
        </div>
    )
}