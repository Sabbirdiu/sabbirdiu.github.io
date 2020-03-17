import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Message from './Message'

import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sabbir Hossain</h2>
            <img
              src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.0-9/s960x960/81462619_1317280558459434_544930418130944000_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_oc=AQkx4rVkzSaxGYELsKgcUJbGqURNIBlVZe2v_dzxFg_hQj5UxLdoDl9f_2DwdYHDX4U&_nc_pt=1&_nc_ht=scontent.fdac20-1.fna&_nc_tp=7&oh=5cfb1bdf40a9cd5943f0af750c3c4faf&oe=5E921FEC"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi I am Sabbir Hossain I'm currently studying Computer Science and Engineering in Daffodil International University. I love to develop for web and mobile platforms, it has always been my dream to become a professional in this sector. I'm also learning Java Script,React-Redux,NodeJS,ExpressJS, python,Django,AI beside my university courses. During free time I like to watch movies or tv shows .In the past I liked to working with android</p>

          </Cell>
     
           <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    01817644941
                  </ListItemContent>
                </ListItem>

              

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sabbir8767@gmail.com
                  </ListItemContent>
                </ListItem>
                <Message/>
               
              </List>
            </div>
          </Cell>
         
        </Grid>
      </div>
        )
    }
}

export default Contact
