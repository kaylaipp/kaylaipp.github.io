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
              <p>Hi there! My name is Kayla. </p>
              <p>
                  I’m passionate about tackling complex challenges, crafting seamless user experiences, and developing solutions that make a real difference.
                  After earning my degree from Boston University, I began my career at Wayfair as a software engineer, and now I’m a software engineer at Rivian!
                   With a recent master’s degree in Artificial Intelligence from Johns Hopkins University, I’m eager to leverage my expertise to drive innovation and create impactful applications

                  <br></br>
                  <br></br><br></br>
                  Here are some technologies that I've worked with recently:
                  <Container>
                      <Row>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> Typescript
                        </Col>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> GraphQL
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
                          <IoIosArrowForward/> DynamoDB
                        </Col>
                        <Col sm="12" md="4" lg="2">
                          <IoIosArrowForward/> Serverless
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
