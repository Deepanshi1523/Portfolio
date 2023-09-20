import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diceGame from "../../Assets/Projects/diceGame.png";
import drumkit from "../../Assets/Projects/drumkit.png";
import foodie from "../../Assets/Projects/foodie.png";
import simonGame from "../../Assets/Projects/simonGame.png";
import tindog from "../../Assets/Projects/tindog.png";

function Projects(){
    return(
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color:"white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent:"center", paddingBottom:"10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={foodie}
                            title="Foodie"
                            description="It is a food ordering static website with amazing UI. It is a beginner friendly website. It is also dynamic in nature for every screen size. In this project I have used the following languages-HTML, CSS and Javascript."
                            ghLink="https://github.com/Deepanshi1523/foodapp.github.io"
                            demoLink="https://deepanshi1523.github.io/foodapp.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tindog}
                            title="Tindog"
                            description="It is a food ordering static website with amazing UI. It is a beginner friendly website. It is also dynamic in nature for every screen size. In this project I have used the following languages-HTML, CSS and Javascript."
                            ghLink="https://github.com/Deepanshi1523/tindog.github.io"
                            demoLink="https://deepanshi1523.github.io/tindog.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={simonGame}
                            title="Simon Game"
                            description="It is a food ordering static website with amazing UI. It is a beginner friendly website. It is also dynamic in nature for every screen size. In this project I have used the following languages-HTML, CSS and Javascript."
                            ghLink="https://github.com/Deepanshi1523/simongame.github.io"
                            demoLink="https://deepanshi1523.github.io/simongame.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={drumkit}
                            title="Drum Kit"
                            description="It is a food ordering static website with amazing UI. It is a beginner friendly website. It is also dynamic in nature for every screen size. In this project I have used the following languages-HTML, CSS and Javascript."
                            ghLink="https://github.com/Deepanshi1523/drumKit.github.io"
                            demoLink="https://deepanshi1523.github.io/drumKit.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={diceGame}
                            title="Dice Challenge"
                            description="It is a food ordering static website with amazing UI. It is a beginner friendly website. It is also dynamic in nature for every screen size. In this project I have used the following languages-HTML, CSS and Javascript."
                            ghLink="https://github.com/Deepanshi1523/diceChallenge.github.io"
                            demoLink="https://deepanshi1523.github.io/diceChallenge.github.io/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Projects;