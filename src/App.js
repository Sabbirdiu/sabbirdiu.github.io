import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { Layout,Navigation,Drawer,Content,Header } from 'react-mdl';
import MainHeader from './components/MainHeader'
// import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    
      <div className="App">
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Sabbir</Link>} scroll>
            <Navigation >
                <Link style={{textDecoration:'none',visibility:'red'}} to="/">Home</Link>
                <Link style={{textDecoration:'none',visibility:'red'}} to="/about">About</Link>
                <Link style={{textDecoration:'none',visibility:'red'}} to="/project">Project</Link>
                {/* <Link style={{textDecoration:'none',visibility:'red'}} to="/resume">Resume</Link> */}
                <Link style={{textDecoration:'none',visibility:'red'}} to="/contact">Contact</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Sabbir</Link>}>
            <Navigation>
               <Link style={{textDecoration:'none',visibility:'red'}} to="/">Home</Link>
                <Link style={{textDecoration:'none',visibility:'red'}} to="/about">About</Link>
                <Link style={{textDecoration:'none',visibility:'red'}} to="/project">Project</Link>
                {/* <Link style={{textDecoration:'none',visibility:'red'}} to="/resume">Resume</Link> */}
                <Link style={{textDecoration:'none',visibility:'red'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="container" />
            <MainHeader/>
           
           
            {/* <Footer/> */}
            
        </Content>
        
    </Layout>
   
   
</div>

      </div>  
  );
};


export default App;
