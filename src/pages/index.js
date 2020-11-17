import React, { Component } from "react"
import { FaLinkedinIn, FaGithub, FaSearch, FaTwitter} from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import About from './about-me.js'
import LandingPage from './landing-page.js'
import Experience from './experience.js'
import Projects from './projects.js'
import Contact from './contact.js'

export default function Main() {
    return (
      <div id = "main">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Archivo+Black"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans"></link>

          <title>Kayla Ippongi</title>
          <LandingPage></LandingPage>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Contact></Contact>

          <div id = "wrapper-social">
            <div id = "socialBar">
              <ul>
                  <a href="https://linkedin.com/in/kaylaipp" target="_blank"> 
                    <FaLinkedinIn/>
                  </a>
              </ul>
              <ul>
                  <a href="https://github.com/kaylaipp" target="_blank"> 
                    <FaGithub/>
                  </a>
              </ul>
              <ul>
                <a href="mailto:kaylasippongi@gmail.com" target="_blank">
                    <FiMail/>
                </a>
              </ul>
              <ul>
                <a href="https://twitter.com/kaylaipp" target="_blank">
                    <FaTwitter/>
                </a>
              </ul>
              <ul>
                  <div id = "verticalLine"></div>
              </ul>
            </div>

            <div id = "emailBar">
              <ul>
                  <a href="mailto:kaylasippongi@gmail.com" id="emailBarLink">kaylasippongi@gmail.com</a>
              </ul>
              <ul>
                  <div id = "verticalLine"></div>
              </ul>
            </div>
        </div>
      </div>
  );
}
