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
              I'm a Senior Software Engineer with ~5 years building enterprise-scale systems that drive millions in cost savings. I have an MS in Artificial Intelligence from Johns Hopkins University with expertise in machine learning, system optimization, and API integrations.
              Currently at Rivian, I've led high-impact projects including a $2M automation system that eliminates 131 manual hours daily and API optimizations delivering 10x performance improvements.

              <br></br>
              <br></br>
              My background spans full-stack development, AI/ML systems, and enterprise integrations.
              I thrive on solving complex technical challenges that deliver measurable business value - whether that's building AI models, architecting scalable GraphQL APIs, or integrating and building microservices.

                  <br></br>
                  <br></br><br></br>
                  Recent focus areas:
                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col sm="12" md="6" lg="3">
                        <h6 style={{color: '#667eea', fontWeight: '700', marginBottom: '10px'}}>AI/ML</h6>
                        <div><IoIosArrowForward/> TensorFlow</div>
                        <div><IoIosArrowForward/> Keras</div>
                        <div><IoIosArrowForward/> Scikit-Learn</div>
                        <div><IoIosArrowForward/> Computer Vision</div>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <h6 style={{color: '#667eea', fontWeight: '700', marginBottom: '10px'}}>Backend & APIs</h6>
                        <div><IoIosArrowForward/> TypeScript</div>
                        <div><IoIosArrowForward/> Python</div>
                        <div><IoIosArrowForward/> GraphQL</div>
                        <div><IoIosArrowForward/> Java</div>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <h6 style={{color: '#667eea', fontWeight: '700', marginBottom: '10px'}}>Cloud & Data</h6>
                        <div><IoIosArrowForward/> AWS Lambda & Stepfunctions</div>
                        <div><IoIosArrowForward/> DynamoDB</div>
                        <div><IoIosArrowForward/> ElasticSearch</div>
                        <div><IoIosArrowForward/> Serverless</div>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <h6 style={{color: '#667eea', fontWeight: '700', marginBottom: '10px'}}>Tool and Frameworks</h6>
                        <div><IoIosArrowForward/> React</div>
                        <div><IoIosArrowForward/> Jest</div>
                        <div><IoIosArrowForward/> Terraform</div>
                        <div><IoIosArrowForward/> Flask</div>
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
