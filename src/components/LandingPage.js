import React, { Component } from 'react'
import { Cell,Grid } from 'react-mdl'


import './Landing.css'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'%',margin:''}} >
               <Grid className='landing-grid' >
                   <Cell col={12} >
                       {/* <img src="https://avatars2.githubusercontent.com/u/47867617?s=460&v=4" alt="sabbir"
                       className='avatar-img' /> */}
                       <div className="space"></div>
                       <div className='banner' >
                          <h1 style={{color:'white'}} >Full Stack Web Developer</h1> 

                          <hr/>
                          <p>React | Redux | MEARN Stack | Django</p>
            <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sabbir-hossain-525b19198/?originalSubdomain=bd" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Sabbirdiu" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100005325077639" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

         

        </div>

                       </div>

                   
                   </Cell>


               </Grid>
            </div>
        
        )
    }
}

export default LandingPage
