import React from 'react'
import { Navbar, SimpleCard, Divider } from './../../ui'
import style from './home.module.css'
import {ReactComponent as ElementGroup} from './../../../res/element_group_mid.svg'
import atom from './../../../res/imgs/atom_icon.png'
import linkedin from './../../../res/imgs/LinkedIn.png'
import github from './../../../res/imgs/Github.png'
import email from './../../../res/imgs/Email.png'

const Home = () => {
    return(
        <div className={`home ${style.home}`}>
            <Navbar />
            <div className={style.intro}>
                <p className={style.intro_1} >Hi my name is</p>
                <h1 className={style.intro_2} >Mohammed <br/> Akinbayo</h1>
                <p className={style.intro_3} >but you can call me </p>
            </div>
            <ElementGroup className={style.svg} />
            <p className={style.hehe}>(hehe, get it?)</p>
            <SimpleCard className={style.card_1} >
                <div className={style.card_1_body}>
                    <p>
                        <span><img src={atom} alt='atom' /></span>
                        Dumb stuff aside, I'm Mo! I am a Computer Engineering student attending Howard University, and I’m excited to take any opportunity to learn more about my passion. 
                        What exactly am I passionate about? Well, everything having to do with technology, of course! 
                        From software development to AI/ML, robotics to IoT, I want to learn as much as I can in the world of software and hardware. 
                        With my passion being this big, I need to learn a lot, and what better way to learn then to create!
                    </p>
                </div>
            </SimpleCard>
            <SimpleCard className={style.card_2} >
                <div className={style.card_2_body}>
                    <p>
                        <span><img src={atom} alt='atom' /></span>
                        And that is why you’re here now! I want to showcase my journey through the crazy world of engineering, and have you along the ride! 
                        If you want to see what I am capable of (including any languages and frameworks I have learned along the way), you can go to the Resume section.
                        Or, if you’d rather see an overview of all of my projects so far, including source code, you can go to the Projects section.
                        Then there’s the Blog section, where I’ll post updates on long term projects. 
                    </p>
                </div>
            </SimpleCard>
            <SimpleCard className={style.card_3}>
                <div className={style.card_3_body}>
                    <p>So with that intro out of the way, if you’d like to reach me, here is all of my contact information:</p>
                    <ul className={style.contact_list}>
                        <li>
                            <a href='https://www.linkedin.com/in/mohammed-akinbayo/'>
                                <img src={linkedin} alt='LinkedIn' />
                                <h5>LinkedIn</h5>
                                <p>https://www.linkedin.com/in/mohammed-akinbayo/</p>
                            </a>
                        </li>
                        <Divider />
                        <li>
                            <a href='https://github.com/Mohammed532/'>
                                <img src={github} alt='Github' />
                                <h5>Github</h5>
                                <p>https://github.com/Mohammed532/</p>
                            </a>
                        </li>
                        <Divider />
                        <li>
                            <a href='mailto:m.m.akinbayo@gmail.com'>
                                <img src={email} alt='Email' />
                                <h5>Email</h5>
                                <p>m.m.akinbayo@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </SimpleCard>
        </div>
    )
}

export default Home