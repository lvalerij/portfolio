import React from "react";
import styles from "./Css/About.module.css";
import Skill from "./Skill.js";
import Commits from "./Commits.js";

const skillSet = [
  {
    name: "JavaScript",
    level: 2,
  },
  {
    name: "React",
    level: 2,
  },
  {
    name: "Java",
    level: 4,
  },
  {
    name: "Spring",
    level: 4,
  },
  {
    name: "Hibernate",
    level: 4,
  },
  {
    name: "MySQL",
    level: 3,
  },
];

// const theme = {
//   background: grey;
// };

const About = () => {
  const [skills, setSkills] = React.useState(skillSet);

  return (
    <div>
      <div className={styles.about}>
        <h1 className="mb-2">Valerij Lutkow</h1>
        <h4>&nbsp;Full-stack developer</h4>
      </div>
      <div className={`mt-3 ${styles.rightSectionInsideText}`}>
        I'm am Full-stack developer bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla
      </div>
      <div
        className={`d-flex mt-4 justify-content-center ${styles.aboutButtons}`}
      >
        <button className={`btn btn-primary ${styles.viewButton}`}>
          View Portfolio
        </button>
        <button className={`btn btn-primary ${styles.resumeButton}`}>
          Resume PDF
        </button>
      </div>
      <div className="mt-5 mb-3">
        <h4>&nbsp;My skills</h4>
        <div className={`flex-row ${styles.skills}`}>
          {skills.map((item) => (
            <Skill name={item.name} level={item.level} key={item.name} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-3">
        <Commits />
      </div>
    </div>
  );
};

export default About;
