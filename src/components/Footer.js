import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub
} from "react-icons/ai";
import{
  SiLeetcode,
  SiGeeksforgeeks
}from "react-icons/si"
import {FaLinkedinIn} from "react-icons/fa";

function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Deepanshi Singhal</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} DS</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a 
                              href="https://github.com/Deepanshi1523"
                              style={{color: "white"}}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                              href="https://www.linkedin.com/in/deepanshi-singhal-195365221/"
                              style={{color: "white"}}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                              href="https://auth.geeksforgeeks.org/user/deepanshisindev/profile"
                              style={{color: "white"}}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SiGeeksforgeeks/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                              href="https://leetcode.com/GirlAnonmous/"
                              style={{color: "white"}}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SiLeetcode/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;