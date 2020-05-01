import React from 'react'
import {Switch,Route}  from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'
// import Resume from './Resume'
import Contact from './Contact'



const MainHeader = () => {
    return (
        <Switch>
            <Route exact path="/" component = {LandingPage} />
            <Route exact path="/about" component = {About} />
            <Route exact path="/project" component = {Projects} />
            {/* <Route exact path="/resume" component = {Resume} /> */}
            <Route exact path="/contact" component = {Contact} />
        </Switch>
        
    )
}

export default MainHeader