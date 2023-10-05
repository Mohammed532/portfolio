import React from 'react'
import { Navbar, Header, LinkButton, SkillCard } from './../../ui'
import { codingLangs, webDevSkills, designSkills, opSys } from '../../../utils/skills'
import styles from './resume.module.css'
import coding_icon from './../../../res/imgs/coding_icon.png'
import web_icon from './../../../res/imgs/web_icon.png'
import block_icon from './../../../res/imgs/block_icon.png'
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
                <div className={styles.subsection}>
                    <section className={styles.subsection_heading}>
                        <p>Howard University</p>
                        <p className={styles.date}>Aug 2020 - May 2024</p>
                    </section>
                    <section className={styles.subsection_body}>
                    <p>Degree: BS in Computer Engineering</p>
                    <p>GPA: 3.88</p>
                    </section>
                </div>

                {/* SKILLS */}
                <h2 className={styles.skill_header}>Skills</h2>
                <div className={styles.skill_cards}>
                    <SkillCard icon={coding_icon} heading='Coding Languages' listItems={codingLangs}/>
                    <SkillCard icon={web_icon} heading='Web Dev' listItems={webDevSkills}/>
                    <SkillCard icon={block_icon} heading='Design Skills' listItems={designSkills}/>
                    <SkillCard icon={os_icon} heading='Operating Systems' listItems={opSys}/>
                </div>

                {/* EXPERIENCE */}
                <h2>Experience</h2>
                <div className={styles.subsection}>
                    <section className={styles.subsection_heading}>
                        <p>NASA GISS Fall 2021 Internship</p>
                        <p className={styles.date}>August 2021 - December 2021</p>
                    </section>
                    <section className={styles.subsection_body}>
                    <p>Worked on sensor and satellite collected data to scan ocean surfaces for oil and other contaminants.
                    Used knowledge gained from CSCI 2 and Engineering Applications class to help develop and maintain an
                    inversion algorithm (written in Python) to obtain refractive light indices of the ocean surface at certain
                    wavelengths.
                    Got to further develop team-working and team-building skills as I worked with other interns on similar
                    projects.</p>
                    <p>Tools Used: Python, Numpy, Data Analysis, Fortran</p>
                    </section>
                </div>
                <div className={styles.subsection}>
                    <section className={styles.subsection_heading}>
                        <p>Capital One Tech Mini-Mester Program</p>
                        <p className={styles.date}>July 2021</p>
                    </section>
                    <section className={styles.subsection_body}>
                    <p>Successfully completed a 7-day immerse training with Capital One’s Tech org through the Tech MiniMester program.
                    Gained skills in Agile, Cyber Security, Data Engineering, Machine Learning & AI, Mobile Development, and
                    Software Engineering.
                    Gained opportunities for mentorship and training to build on current skills in topics like Software
                    Development, Agile framework, Machine Learning, Cyber and more.
                    Received soft skill training in teamwork, communication, mentorship and imposter syndrome.
                    Grew my network by connecting with Capital One leaders and facilitators via LinkedIn.</p>
                    <p>Tools Used: Python, Data Analysis, AI/ML</p>
                    </section>
                </div>
                <div className={styles.subsection}>
                    <section className={styles.subsection_heading}>
                        <p>BVCC Pitch Project</p>
                        <p className={styles.date}>September 2020</p>
                    </section>
                    <section className={styles.subsection_body}>
                    <p>Worked on a team to design and build Kope, a mental health mobile app where people can connect and
                    seek advice about their mental health, using Figma for the design and React for the app.
                    Was 1st place out of six other teams in pitch competition</p>
                    <p>Tools Used: HTML/CSS, Javascript, React, Figma, Google Firebase</p>
                    </section>
                </div>
                <div className={styles.subsection}>
                    <section className={styles.subsection_heading}>
                        <p>Google DSC Mini Solution Project</p>
                        <p className={styles.date}>October 2020</p>
                    </section>
                    <section className={styles.subsection_body}>
                    <p>Worked on a team to design Village, a social media mobile app focused on connecting with those in your
                    area, using Figma and React.
                    App design won top three out of 16 teams in the design competition</p>
                    <p>Tools Used: HTML/CSS, Javascript, React, Figma, Google Firebase</p>
                    </section>
                </div>
            </div>
        </div>
    )
}