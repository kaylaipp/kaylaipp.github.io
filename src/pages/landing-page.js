import React, { Component } from "react"
import { Nav, NavItem, NavLink} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"; 

export default class LandingPage extends Component {
    render () {
    return (
        <div id = "landingPage" >
          <Nav fill>
              <NavItem></NavItem>
              <NavItem>
                  <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem></NavItem>
          </Nav>          
           <div id = "landingPageContent" >
               <div id= "wrapper">
                    <p class = "landingPageSubtitle">Hello world, My name is</p>
                    <p class = "landingPageTitle">Kayla Ippongi</p>
                    <p class = "landingPageSubtitle">Software Engineer</p>
                </div>
            </div>
            <div class="scroll-down"></div>
         </div>
    );
  }
}
