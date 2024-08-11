import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import  "../styles/global.css"
import { Button } from "shards-react";
import  "../../static/Kayla_Ippongi_Resume.pdf"

export default class Projects extends Component {
    render() {
    return (
    <div id = "contact">
        <div id = "contactContent">
        <h1 class = "title">Contact</h1>
        <br></br>

        <div id = "paragraphText">
          <p>I'm currently seeking software engineering and AI/ML positions! :)
          </p>
        </div>
        <a href="Kayla_Ippongi_Resume.pdf" target="blank_">
        <Button outline pill theme="secondary">
          Resume
        </Button>
        </a>
        <br></br>
      </div>
          <div id = "footerBar">
            Built with <a href="https://www.gatsbyjs.org/" target="_blank"> GatsbyJS </a>
          </div>
    </div>
    );
  }
}