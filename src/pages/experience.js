import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import  "../styles/global.css"
import { IoIosArrowForward } from "react-icons/io";

export default class Experience extends Component {
    render() {
    return (
    <div id = "experience">
        <div id = "experienceContent">
        <h1 class = "title">Experience</h1>
        <br/>
        <Card>
            <CardBody>
                <CardTitle>Senior Software Engineer</CardTitle><br></br>
                <CardSubtitle>Rivian | April 2021 - Present</CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/>
                    Implemented multivariate and A/B feature tests leveraging our lead image algorithm for Wayfair and it’s three partner sites to determine best strategies for our company’s biggest sale day <br/>
                </div>
            </CardBody>
        </Card>
        <br/>
        <Card>
            <CardBody>
                <CardTitle>Software Engineer</CardTitle><br></br>
                <CardSubtitle>Wayfair | June 2019 - Feb 2020</CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/>
                    Implemented multivariate and A/B feature tests leveraging our lead image algorithm for Wayfair and it’s three partner sites to determine best strategies for our company’s biggest sale day <br/>
                <IoIosArrowForward/>
                Leveraged knowledge in ReactJS, PHP, GraphQL and SQL to build new features and tests <br/>
                </div>
            </CardBody>
        </Card>
        <br/>
        <Card>
            <CardBody>
                <CardTitle>DevOps Developer Intern</CardTitle><br></br>
                <CardSubtitle>IBM | May - July 2018</CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/> Developed internal service tool for the cloud security team to help optimize Kubernetes port lookup process. <br/>
                <IoIosArrowForward/> Built REST api through Python, Flask, Kubernetes, Docker and Minikube <br/>
                </div>
            </CardBody>
        </Card>
        <br/>
        <Card>
            <CardBody>
                <CardTitle>Software Developer Intern</CardTitle><br></br>
                <CardSubtitle>CompanyWide | Jan - May 2018 </CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/> Developed and designed front end and back end of sales dashboard for incoming sales representatives for the company <br/>
                <IoIosArrowForward/> Built and redesigned features with Meteor, Javascript, HTML, Handlebars and MongoDB <br/>
                </div>
            </CardBody>
        </Card>
        </div>
        <br></br>
    </div>
    );
  }
}