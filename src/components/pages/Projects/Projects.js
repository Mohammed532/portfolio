import React from 'react'
import { Navbar, Header, ProjectCard } from './../../ui'
import { projects } from '../../../utils/projects'

export default function Projects() {
    return (
        <div>
            <Navbar />
            <Header text='Projects' />
            <ProjectCard projectInfo={projects[0]}/>
        </div>
    )
}