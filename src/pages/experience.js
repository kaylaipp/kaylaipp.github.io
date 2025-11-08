import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import  "../styles/global.css"


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
                <CardSubtitle>Rivian | Sept 2022 - Present</CardSubtitle>
                <div id = "exerienceCard">
                  <ul>
                    <li>Led platform integration that automated Fleet workflows—reducing 131 labor hours/day and saving $2M annually</li>
                    <li>Optimized API latency from 15s to 1.5s (10x improvement), saving $6M annually in wait time</li>
                    <li>Migrated e-signature services to Box API, ensuring feature parity while improving scalability</li>
                  </ul>
                </div>
            </CardBody>
        </Card>
        <br/>

        <Card>
            <CardBody>
                <CardTitle>Software Engineer</CardTitle><br></br>
                <CardSubtitle>Rivian | April 2021 - Sept 2022</CardSubtitle>
                <div id = "exerienceCard">
                  <ul>
                    <li>Built backend services for Recall and Quality Containment dashboard, reducing manual tracking across thousands of vehicles</li>
                    <li>Improved recall data retrieval speed by 6x using ElasticSearch optimization</li>
                  </ul>
                </div>
            </CardBody>
        </Card>
        <br/>

        <Card>
            <CardBody>
                <CardTitle>Software Engineer</CardTitle><br></br>
                <CardSubtitle>Wayfair | June 2019 - Feb 2020</CardSubtitle>
                <div id = "exerienceCard">
                  <ul>
                    <li>Developed Storefront Product Options features, improving engagement across millions of products</li>
                    <li>Led cross-functional API migration to serve all product option data</li>
                  </ul>
                </div>
            </CardBody>
        </Card>
        <br/>
        <Card>
            <CardBody>
                <CardTitle>DevOps Developer Intern</CardTitle><br></br>
                <CardSubtitle>IBM | May - July 2018</CardSubtitle>
                <div id = "exerienceCard">
                  <ul>
                    <li>Built internal tool to optimize Kubernetes port lookup process for cloud security team</li>
                  </ul>
                </div>
            </CardBody>
        </Card>
        <br/>
        </div>
        {/* <br></br> */}
    </div>
    );
  }
}