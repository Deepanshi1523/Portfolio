import React from "react";
import {Col, Row} from "react-bootstrap";
import{
    SiVisualstudiocode,
    SiPostman,

}from "react-icons/si";
import{
    AiFillCodeSandboxCircle,
}from "react-icons/ai";
import{
    DiAtom,
}from "react-icons/di"

function Toolstack(){
    return(
        <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <AiFillCodeSandboxCircle/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAtom/>
            </Col>
        </Row>
    );
}
export default Toolstack;