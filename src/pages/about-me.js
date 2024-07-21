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
                  I enjoy solving challenging problems, building intutive experiences, and working on applications that have meaningful impact.
                  Shortly after I graduated Boston University, I joined Wayfair as a software engineer, and then joined Rivian where I currently work as a senior software engineer.
                  I recently completed my masters in Artificial Intelligence at Johns Hopkins University and look forward to putting that to use!

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
