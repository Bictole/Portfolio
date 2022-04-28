import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme, mediaQueries } from "../components/Themes";




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;

transition: transform .2s;

&:hover {
  transform: scale(1.2);
}


${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`

const LogoComponent = (props) => {
    return (
        <NavLink to="/">
          <Logo color={props.theme}>
            VS
          </Logo>
        </NavLink>
        
    )
}

export default LogoComponent
