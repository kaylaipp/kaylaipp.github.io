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
                <CardSubtitle>Rivian | Sept 2022 - Present</CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/>
                Led integration of 3rd party platform, AutoIntegrate, implementing their <b>SOAP API’s</b> into our <b>Typescript, GraphQL</b> backend and <b>React</b> frontend,
                to automate Fleet authorization workflows - replacing manual processes and reducing ~131 labor hours/day, and $2M annually in operational
                savings. <br/>

            <IoIosArrowForward/>
            Optimized API latency for service pricing endpoints, decreasing average wait time from 15s to 1.5, achieving a 10x speed improvement and an estimated $6M in annual wait time savings. <br/>

            <IoIosArrowForward/>
            Migrated customer e-signature services and API’s from OneSpan to Box API’s using <b>Typescript, GraphQL and AWS Lambda </b>, ensuring feature parity and seamless customer experience while improving backend scalability and maintainability for long term growth <br/>

            <IoIosArrowForward/>
            Led technical design discussions and authored design documentation on high-level implementation strategies and trade-offs for new services or larger architectural changes with cross functional engineering stakeholders <br/>
                </div>
            </CardBody>
        </Card>
        <br/>

        <Card>
            <CardBody>
                <CardTitle>Software Engineer</CardTitle><br></br>
                <CardSubtitle>Rivian | April 2021 - Sept 2022</CardSubtitle>
                <div id = "exerienceCard">
                <IoIosArrowForward/>
                Designed and implemented backend services for Rivian’s Recall and Quality Containment dashboard using <b>Typescript, GraphQL, AWS Lambda, StepFunctions and DynamoDB </b>, reducing manual tracking efforts and accelerating issue resolution across thousands of
serviced vehicles <br/>

                <IoIosArrowForward/>
                Improved recall data retrieval speed by 6x by leveraging <b>ElasticSearch</b>, implementing indexing and querying strategies for high-volume data processing. <br/>

                <IoIosArrowForward/>
                Triaged and resolved critical production bugs, collaborating directly with stakeholders and users to ensure high service reliability and satisfaction <br/>
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
                    Developed and maintained features on the Storefront Product Options team using <b>PHP, GraphQL, and React </b>, improving consumer
                    engagement and product visibility across millions of products.<br/>
                <IoIosArrowForward/>
                    Worked cross-functionally with other engineering teams to remove dependencies on our service and help cutover other teams to our
    new API. Contributed to our team’s API that services all product option data on website <br/>
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
                <IoIosArrowForward/> Built REST api through <b>Python, Flask, Kubernetes, Docker and Minikube</b> <br/>
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
                <IoIosArrowForward/> Built and redesigned features with <b>Meteor, Javascript, HTML, Handlebars and MongoDB </b> <br/>
                </div>
            </CardBody>
        </Card>
        </div>
        {/* <br></br> */}
    </div>
    );
  }
}