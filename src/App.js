import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import GlobalStyle from './globalStyles';

import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'

function App() {
  return <>
    

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
       <Switch>
         <Route exact path="/" component={Main}/>
         <Route exact path="/about" component={AboutPage}/>
         <Route exact path="/blog" component={BlogPage}/>
         <Route exact path="/work" component={WorkPage}/>
         <Route exact path="/skills" component={MySkillsPage}/>
       </Switch>
    </ThemeProvider>
    </>
    
}

export default App

