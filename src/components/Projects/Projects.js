import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diceGame from "../../Assets/Projects/diceGame.png";
import blogImg from "../../Assets/Projects/blog.jpg";
import ipod from "../../Assets/Projects/Ipod-pic.png";
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
                            description="It is a website for Dog's dating app. It is static in nature with some amazing effects. In this I have used HTML and CSS. This project idea is taken from tinder but here dogs date each other instead of humans"
                            ghLink="https://github.com/Deepanshi1523/tindog.github.io"
                            demoLink="https://deepanshi1523.github.io/tindog.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={simonGame}
                            title="Simon Game"
                            description="This project is based on simon game in which you have to memorise the sequence of buttons in which they are played and then you have to play in same sequence and if you press the wrong button then the game is over. It is a basic javascript project which is based on event listeners and randomisation."
                            ghLink="https://github.com/Deepanshi1523/simongame.github.io"
                            demoLink="https://deepanshi1523.github.io/simongame.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={drumkit}
                            title="Drum Kit"
                            description="It is a minor javascript project in which you can play various musical instruments via key specified on them or by mouse click. It is used by toddlers to get familiar with the music. It is based on event listeners property of javascript"
                            ghLink="https://github.com/Deepanshi1523/drumKit.github.io"
                            demoLink="https://deepanshi1523.github.io/drumKit.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={diceGame}
                            title="Dice Challenge"
                            description="It is a two man game where only one can win. In this we generate a random number on both dice. The number is in the range of 1-6 same as that of a real dice. The player with highest number wins the game. This project is based on event listeners and randomisation property of the javascript."
                            ghLink="https://github.com/Deepanshi1523/diceChallenge.github.io"
                            demoLink="https://deepanshi1523.github.io/diceChallenge.github.io/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={iPod}
                            title="iPod"
                            description="Used React.js to create a dynamic web app with a visually appealing interface inspired by the iconic iPod. Implemented intuitive navigation controls for a classic scroll-wheel experience. Emphasized responsive design for consistent user experience on diverse devices. Integrated audio playback for users."
                            ghLink="https://github.com/Deepanshi1523/my-ipod"
                            demoLink="https://deepanshi1523.github.io/my-ipod/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={blogImg}
                            title="Blogie"
                            description="This platform serves as a valuable space for creators and explorers to share their thoughts and experiences. Crafted appealing blog layouts with React, prioritizing user experience. Implemented MongoDB for efficient data storage. Implemented secure user authentication for blog functions, prioritizing data protection."
                            ghLink="https://github.com/Deepanshi1523/blogie"
                            demoLink="https://github.com/Deepanshi1523/blogie"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Projects;