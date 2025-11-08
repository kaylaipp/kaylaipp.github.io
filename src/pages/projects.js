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
            <Container className="projectsContainer">
                {/* Computer Vision Section */}
                <h2 class = "section-title">Computer Vision</h2>
                <br></br>
                <Row>
                    <Col>
                    <Card>
                        <CardImg top src="project0.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>YOLOv4 Street Parking Detection</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Curated and annotated a combined dataset from Argo, Waymo, and nuScenes (4,500 frames) and evaluated YOLOv4 vs. Faster R-CNN for on-street parking localization.</li>
                            <li>Achieved up to 83% precision (combined mAP ≈ 64%), identified dataset-combination benefits, and proposed extensions (3D detection, sign-reading, knowledge graphs)</li>
                          </ul>
                        </div>
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://drive.google.com/file/d/1EGXNRXR1C5stpYVL2TC7WD7xan3eFLr6/view?usp=drive_link" target="_blank">
                              <div id = "iconWrapper">📄</div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Python</Badge>
                          </span>
                          <span>
                            <Badge theme="light">YOLOv4</Badge>
                          </span>
                          <span>
                            <Badge theme="light">PyTorch</Badge>
                          </span>
                        </div>

                        </CardBody>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <CardImg top src="final.gif" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Car Lane Detection</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Real-time computer vision pipeline for autonomous vehicle lane detection using OpenCV and Python</li>
                            <li>Implements multi-stage image processing including Canny edge detection, Hough line transformation, and region-of-interest masking to accurately identify lane boundaries in video streams under diverse road and lighting conditions.</li>
                          </ul>
                        </div>
                        <br></br>
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
                        <CardTitle>ASL Letter Recognition System</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Computer vision system for American Sign Language recognition using OpenCV template matching algorithms</li>
                            <li>Supports real-time classification of ASL letters, demonstrating practical AI applications for accessibility and inclusive technology</li>
                          </ul>
                        </div>
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
                </Row>

                <br/><br/>

                {/* Natural Language Processing Section */}
                <h2 class = "section-title">Natural Language Processing</h2>
                <br></br>
                <Row>
                    <Col>
                    <Card>
                        <CardImg top src="project1.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Spotify Sentiment Analysis</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Music sentiment analysis system combining Spotify's Web API with IBM Watson NLP to decode emotional patterns in song lyrics.</li>
                            <li>Side note: Spotify deprecated their web API's that supported audio analysis so this project is archived :( </li>
                          </ul>
                        </div>
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
                </Row>

                <br/><br/>

                {/* Machine Learning & AI Section */}
                <h2 class = "section-title">Machine Learning & AI</h2>
                <br></br>
                <Row>
                    <Col>
                    <Card>
                        <CardImg top src="project5.png" className = "projectImage"/>
                        <CardBody>
                        <CardTitle>Autonomous Racing Reinforcement Learning System</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Autonomous racing system using reinforcement learning algorithms to navigate a racetrack with varying track layouts and obstacles.</li>
                            <li>Implemented various reinforcement learning algorithms including Q-learning, SARSA, and DQN to navigate the racetrack and avoid obstacles.</li>
                            <li>Features collision detection using Bresenham's line algorithm, intelligent crash recovery with breadth-first search, and performance analysis across multiple track configurations</li>
                          </ul>
                        </div>
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
                        <CardTitle>Writing Quality Prediction System</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Machine learning system for automated writing assessment using keystroke behavioral analysis.</li>
                            <li>Developed for Kaggle's writing quality competition, implementing sophisticated ensemble learning with CatBoost, Random Forest, and Linear Regression.</li>
                            <li>Features extensive feature engineering on writing process data to predict essay quality from typing behavioral patterns</li>
                          </ul>
                        </div>
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="https://github.com/kaylaipp/Linking-Writing-Processes-to-Writing-Quality" target="_blank">
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

                <br/><br/>

                {/* Research and Writing Section */}
                <h2 class = "section-title">Research and Writing</h2>
                <br></br>
                <Row>
                    <Col>
                    <Card>
                        <CardBody>
                        <CardTitle>Contingencies and Implications of Artificial Consciousness</CardTitle>
                        <div id = "projectText">
                          <ul>
                            <li>Consciousness and alignment in AI models in something that I'm really interested in!
                            </li>
                            <li>I explored
                              whether we can create truely conscious AI or just systems that fake it, through analyzing past
                              consciousness frameworks and artifical qualia implementations.</li>
                          </ul>
                        </div>
                        <br/>
                        <div id = "inlineWrapper">
                          <span>
                            <a href="/Ippongi_cognitive_final.pdf" target="_blank">
                              <div id = "iconWrapper">📄</div>
                            </a>
                          </span>
                          <span>
                            <Badge theme="light">Consciousness</Badge>
                          </span>
                          <span>
                            <Badge theme="light">Alignment</Badge>
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