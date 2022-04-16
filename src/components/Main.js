import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
;


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.theme.body};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: 50%;
height: 100%;
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click] = useState(false);

    return (
        <MainContainer>
            <DarkDiv   click={click}/>
            <Container>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>

                <Intro/>

                <Contact target="_blank" to={{pathname:"mailto:victor.simonin@epita.fr"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        [Contact Me]
                    </motion.h2>
                </Contact>

                <BLOG to="/blog">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Blog
                    </motion.h2>
                </BLOG>

                <WORK to="/work" click={+click}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Work
                    </motion.h2>
                </WORK>

                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    
                    <SKILLS to="/skills">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>

        </MainContainer>
    )
}

export default Main