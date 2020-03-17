import React, { Component } from 'react'

import { Tabs,Tab,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl'

import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle className="img"  style={{ height: '176px' }} ></CardTitle>
                  <CardText>
                    It was my first project in React-Redux.This is like CRUD based app.we can add ,delete ,update in our app.
                  </CardText>
                  <CardActions border>
                    
                    <a href="https://github.com/Sabbirdiu/contactlist-" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    
                    <a href="http://sabbirdiu.github.io/contactlist-" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                {/* project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle className="img-2"  style={{ height: '176px' }} ></CardTitle>
                  <CardText>
                   A simple Portfolio .
                  </CardText>
                  <CardActions border>
                    
                    <a href="https://github.com/Sabbirdiu/resume" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    
                    <a href="ttp://sabbirdiu.github.io/resume" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                 {/* project 3 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle className="img3"  style={{ height: '176px' }} ></CardTitle>
                  <CardText>
                    A ecommerce site . Which I develop for my semester project.
                  </CardText>
                  <CardActions border>
                    
                    <a href="https://github.com/Sabbirdiu/shopvaly" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    
                    <a href="https://shopvaly.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
     
      
         
      
               
              </div>
      
      
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div><h1>Under Developing</h1></div>
            )
        }
        if(this.state.activeTab===2){
            return(
                <div><h1>Under Developing</h1></div>
            )
        }
        
    }

    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React-Redux</Tab>
                <Tab>Django</Tab>
                <Tab>MERN Stack</Tab>
            </Tabs>
            
                   <Cell col={12}>
                       <div className='projects-content'  >
                       {this.toggleCategories()}
                       </div>
                   </Cell>
              
        </div>   
        )
    }
}

export default Projects
