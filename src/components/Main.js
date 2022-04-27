import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

//Components
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;

    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.body};
  }
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.body};
    text-shadow: 0 0 4px #000;
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: 0 0 4px #000;
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;

  ${mediaQueries(50)`
        color: #000000;
`};
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: 50%;
  background-color: #000000;
  height: "100%";
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${mediaQueries(50)`
        height: 50%;
        right:0;
  
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;
`};
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <LogoComponent theme="dark"/>
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme="dark"/>
          )}

          {mq ? (
            <Contact
              click={+click}
              target="_blank"
              to={{ pathname: "mailto:victor.simonin@epita.fr" }}
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                [Contact Me]
              </motion.h3>
            </Contact>
          ) : (
            <Contact
              click={+false}
              target="_blank"
              to={{ pathname: "mailto:victor.simonin@epita.fr" }}
            >
              <motion.h3
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                [Contact Me]
              </motion.h3>
            </Contact>
          )}

          {mq ? (
            <BLOG click={+click} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Blog
              </motion.h2>
            </BLOG>
          ) : (
            <BLOG click={+false} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Blog
              </motion.h2>
            </BLOG>
          )}

          <WORK click={+click} to="/work">
            <motion.h2
              onClick={() => setpath("work")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
            </motion.h2>
          </WORK>

          <BottomBar>
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About.
              </motion.h2>
            </ABOUT>

            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills.
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>

        <Intro/>
      </MainContainer>
    </Suspense>
  );
};

export default Main;
