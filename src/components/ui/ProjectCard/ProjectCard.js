import { Card, CardTitle, Icon } from 'react-materialize'
import style from './project_card.module.css'

export default function ProjectCard({className = '', img, projectInfo}){
    let {project, links, about, skills} = projectInfo
    const linksArray = Object.keys(links).map((k, i) => <a key={i} href={links[k]}>{k}</a>)
    return(
        <div className={`${className} ${style.outer_shell}`}>
            <Card
              actions={linksArray}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={img} >{project}</CardTitle>}
            >
            </Card>
        </div>
    )
}