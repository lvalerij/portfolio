import React from "react";
import styles from "./Css/Skill.module.css";

const showLevel = (level, name) => {
  const htmlCode = [];
  for (var i = 0; i < 5; i++) {
    if (i < level) {
      htmlCode.push(<span className={styles.good} key={`${name}${i}`} />);
    } else {
      htmlCode.push(<span className={styles.neutral} key={`${name}${i}`} />);
    }
  }
  return htmlCode;
};

const Skill = (props) => {
  return (
    <div
      className={`px-2 py-1 mt-2 mb-2 mr-3 ${styles.skill}`}
      key="{props.key}"
    >
      <h6 className="text-center font-weight-bold">{props.name}</h6>
      <div className={`text-center ${styles.bars}`}>
        {showLevel(props.level, props.name)}
      </div>
    </div>
  );
};

export default Skill;
