import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suryateja Parvata </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am a Full Stack Web Developer, graduated from Masai School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Computers aren’t the thing. They’re the thing that gets us to the thing"{" "}
          </p>
          <footer className="blockquote-footer">Suryateja Parvata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
