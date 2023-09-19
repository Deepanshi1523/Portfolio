import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard(){
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign:"justify"}}>
                        Hi Everyone, I am <span className="purple">Deepanshi Singhal </span>
                        from <span className="purple"> Faridabad, India.</span>
                        <br /> I am a final year student pursuing Bachelor of Technology (BTech)
                        in Computer Science and Engineering at GGSIPU.
                        <br />
                        Additionally, I worked as a front-end developer in a startup named Mazinda.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Watching Podcast
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Playing Guitar
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Badminton
                        </li>
                    </ul>
                    <p style={{color:"rgb(155 126 172"}}>
                        "Engineering is not a career it is a lifestyle for me!"{" "}
                    </p>
                    <footer className="blockquote-footer">Deepanshi</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}
export default AboutCard;