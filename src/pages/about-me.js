import React, { Component } from "react"
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import  "../styles/global.css"
import { IoIosArrowForward } from "react-icons/io";

export default class About extends Component {
  render() {
    return (
    <div id = "about">
        <div id = "aboutContent" >
            <h3 class = "title">About Me</h3>
            <br></br>

            <div id = "paragraphText">
              <p>Hi there! My name is Kayla and I'm a software engineer! </p>
              <p>I enjoy algorithmically challenging problems and building awesome applications and user experiences!
                  Shortly after I graduated Boston University, I joined Wayfair as a full stack software engineer, but
                  I'm currently looking for full time opportunties on the West Coast! 
                  <br></br><br></br>
                  Here are some technologies that I've worked with recently:
                  <Container>
                      <Row>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> React
                        </Col>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> PHP
                        </Col>
                        <Col sm="12" md="4" lg="2">
                        </Col>
                        <Col sm="12" md="4" lg="7">
                        </Col>
                      </Row>

                      <Row>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> Python
                        </Col>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> Java
                        </Col>
                        <Col sm="12" md="4" lg="2">
                        </Col>
                        <Col sm="12" md="4" lg="7">
                        </Col>
                      </Row>

                      <Row>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> SQL
                        </Col>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> R
                        </Col>
                        <Col sm="12" md="4" lg="2">
                        </Col>
                        <Col sm="12" md="4" lg="7">
                        </Col>
                      </Row>
                  </Container>
                  <br/>

              </p>
            </div>
        </div>
    </div>
    );
  }
}
