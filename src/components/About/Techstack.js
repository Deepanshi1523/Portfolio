import React from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import{
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3,
    DiBootstrap,
    DiJqueryLogo,
} from "react-icons/di";
import{
    AiFillHtml5
}from "react-icons/ai";
import{
    SiTailwindcss
}from "react-icons/si";

function Techstack(){
    return(
        <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <AiFillHtml5/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJqueryLogo/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus/>
            </Col>
        </Row>
    );
}
export default Techstack;