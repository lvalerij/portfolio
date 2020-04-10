import React from "react";
import "./styles.css";
import Skill from "./Skill.js";

const skillSet = [
  {
    name: "JavaScript",
    level: 2
  },
  {
    name: "React",
    level: 1
  },
  {
    name: "Java",
    level: 4
  },
  {
    name: "Spring",
    level: 3
  },
  {
    name: "Hibernate",
    level: 3
  },
  {
    name: "MySQL",
    level: 3
  }
];

class About extends React.Component {
  state = {
    skills: skillSet
  };

  render() {
    return (
      <div className="AboutSection">
        <div className="about">
          <h1 className="mb-2">Valerij Lutkow</h1>
          <h4>&nbsp;Full-stack developer</h4>
        </div>
        <div className="mt-3 rightSectionInsideText">
          I'm am Full-stack developer bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla
        </div>
        <div className="d-flex mt-4 justify-content-center aboutButtons">
          <button className="viewButton">View Portfolio</button>
          <button className="resumeButton">Resume PDF</button>
        </div>

        <div className="mt-5 mb-3">
          <h4 className="font-weight-bold">&nbsp;My skills</h4>
          <div className="skills flex-row">
            {this.state.skills.map(item => (
              <Skill name={item.name} level={item.level} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
