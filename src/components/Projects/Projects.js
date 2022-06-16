import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import kfcI from "../../Assets/Projects/kfcI.png";
import kfcII from "../../Assets/Projects/kfcII.jpg";
import buywow from "../../Assets/Projects/buywow.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kfcII}
              isBlog={false}
              title="Kfc-Clone-React"
              description="online.kfc.co.in website clone build with react.js, redux, and html. Have features which allows user to  login,add products to cart, ."
              link="https://github.com/CodEsHiVaz/kfc-clone-react"
              deplink = "https://mellow-froyo-f88246.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buywow}
              isBlog={false}
              title="BuyWowClone"
              description="BuyWowClone is a clone of the website www.buywow.com. It is built with html,Css and Javascript. Have features which allows user to  login,add products to cart, and Checkout ."
              link="https://github.com/SuryatejaParvata/BuyWowClone-Unit-3/tree/main"
              deplink = "https://fluffy-mermaid-1fa62f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kfcI}
              isBlog={false}
              title="Kfc Clone I"
              description="online.kfc.co.in website clone build with Html,Css and Javascript. Have features which allows user to  login,add products to cart, ."
              link="https://github.com/Anands-88/Kfc-Project"
              deplink = "https://kfc-project-anands-88.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              // isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
