import React, { Component } from "react"
import { Container, Row, Col, Card, CardBody, CardImg , CardTitle, Button, Badge} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import  "../styles/global.css"
import {FaGithub} from 'react-icons/fa';
import  "../../static/project1.png"
import  "../../static/project3.png"
import  "../../static/screenshot1.png"


export default class Projects extends Component {
    render() {
    return (
    <div id = "projects">
        <div id = "projectsContent">
            <br></br>
            <h1 class = "title">Projects</h1>
            <br></br>
            <Container>
                <Row>

                    <Col>
                    <Card>
                        <CardImg top src="final.gif" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Car Lane Detection</CardTitle>
                        <div id = "projectText">Car lane detection with OpenCV and Python</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <br></br> */}
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/lane-detection" target="_blank">
                              <div id = "iconWrapper"><FaGithub/></div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">OpenCV</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <CardImg top src="screenshot1.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>ASL Letter Recogition</CardTitle>
                        <div id = "projectText">Basic ASL letter recogition using via OpenCV</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <br></br> */}
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/Gesture-Recognition" target="_blank">
                              <div id = "iconWrapper"><FaGithub/></div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">OpenCV</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>


                    <Col>
                    <Card>
                        <CardImg top src="project1.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Spotify Sentiment Analysis</CardTitle>
                        <div id = "projectText">Lyric sentiment analysis on albums/current top songs from
                        Spotify</div>
                        <br/>
                          <a href="https://kaylaipp.shinyapps.io/Lyric-Analysis/">
                            <Button outline theme="secondary">Try It Out</Button>
                          </a>
                          <br/>
                          <br></br>

                          <div id = "inlineWrapper">
                            <span>
                              <a href="https://github.com/kaylaipp/Lyric-Analysis" target="_blank">
                              <div id = "iconWrapper">
                                <FaGithub/>
                                </div>
                              </a>
                            </span>
                            <span>
                                <Badge theme="light">R</Badge>
                            </span>
                            <span>
                                <Badge theme="light">Watson NLP</Badge>
                            </span>
                            <span>
                                <Badge theme="light">Spotify</Badge>
                            </span>
                          </div>
                        </CardBody>
                    </Card>
                    </Col>

                </Row>



                <br/>

                <Row>
                    <Col>
                    <Card>
                        <CardImg top src="project4.png" className = "projectImage" />
                        <CardBody>
                        <CardTitle>Predicting TV Scripts</CardTitle>
                        <div id = "projectText">Predicting TV scripts with neural networks using season 1 of Friends</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/Lyric-Analysis" target="_blank">
                              <div id = "iconWrapper"><FaGithub/></div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">Tensorflow</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <CardImg top src="project5.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Racetrace Reinforcement Learning</CardTitle>
                        <div id = "projectText">Various Reinforcement Learning Algorithms on Racetrack Simulations</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/RacetraceReinforcementLearning" target="_blank">
                              <div id = "iconWrapper"><FaGithub/></div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">Q-learning</Badge>
                          </span>
                          <span>
                            <Badge theme="light">SARSA</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>



                    <Col>
                    <Card>
                        <CardImg top src="project6.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Linking Writing Processes to Writing Quality</CardTitle>
                        <div id = "projectText">Stacked model (Cat Boost regressor, Random forest and linear regression models) to predict writing quality</div>
                        <br></br>
                        <br></br>
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/RacetraceReinforcementLearning" target="_blank">
                              <div id = "iconWrapper"><FaGithub/></div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">Tensorflow</Badge>
                          </span>
                          <span>
                            <Badge theme="light">Random Forest</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>




                </Row>
            </Container>
        </div>
    </div>
    );
  }
}