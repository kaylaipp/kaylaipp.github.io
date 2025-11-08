import React, { Component } from "react"
import { Container, Row, Col, Card, CardBody, CardTitle, Badge } from "shards-react";
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
              <p>Hi there! My name is Kayla! </p>
              <p>
              I’m a software engineer with 5 years of experience and an M.S. in AI, and I’m passionate about using machine learning and intelligent systems to solve real-world problems.

              At Rivian, I’ve built platforms that saved millions and sped up workflows 10×, and in my AI research I’ve worked on computer vision and autonomous vehicle datasets. I’m excited about pushing the boundaries of what AI can do and building products that have a meaningful impact at scale.

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
                        <Card>
                          <CardBody>
                            <CardTitle>AI / ML</CardTitle>
                            <div style={{display:'flex', flexWrap:'wrap', gap:'6px'}}>
                              <Badge theme="light">TensorFlow</Badge>
                              <Badge theme="light">Keras</Badge>
                              <Badge theme="light">Scikit-Learn</Badge>
                              <Badge theme="light">Computer Vision</Badge>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <Card>
                          <CardBody>
                            <CardTitle>Backend & APIs</CardTitle>
                            <div style={{display:'flex', flexWrap:'wrap', gap:'6px'}}>
                              <Badge theme="light">TypeScript</Badge>
                              <Badge theme="light">Python</Badge>
                              <Badge theme="light">GraphQL</Badge>
                              <Badge theme="light">Java</Badge>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <Card>
                          <CardBody>
                            <CardTitle>Cloud & Data</CardTitle>
                            <div style={{display:'flex', flexWrap:'wrap', gap:'6px'}}>
                              <Badge theme="light">AWS Lambda</Badge>
                              <Badge theme="light">Step Functions</Badge>
                              <Badge theme="light">DynamoDB</Badge>
                              <Badge theme="light">Elasticsearch</Badge>
                              <Badge theme="light">Serverless</Badge>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col sm="12" md="6" lg="3">
                        <Card>
                          <CardBody>
                            <CardTitle>Tools & Frameworks</CardTitle>
                            <div style={{display:'flex', flexWrap:'wrap', gap:'6px'}}>
                              <Badge theme="light">React</Badge>
                              <Badge theme="light">Jest</Badge>
                              <Badge theme="light">Terraform</Badge>
                              <Badge theme="light">Flask</Badge>
                            </div>
                          </CardBody>
                        </Card>
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
