import React from "react";
import { parseTimeStamp } from "./utils/formatters";
import styles from "./Css/Commits.module.css";

const GIT_API = "https://api.github.com/users/lvalerij/events";

const EVENT_TYPE = {
  push: "PushEvent",
  create: "CreateEvent",
};

const Commits = () => {
  const [commits, setCommits] = React.useState();

  React.useEffect(() => {
    async function getCommitsData() {
      const response = await fetch(GIT_API);
      const data = await response.json();
      const commits = data.filter(
        (commit) =>
          commit.type === EVENT_TYPE.push || commit.type === EVENT_TYPE.create
      );
      setCommits(commits.splice(0, 5));
    }
    getCommitsData();
  }, []);

  return (
    <div>
      <h4>&nbsp;Github activities (5 latest)</h4>
      <div className="flex-row mt-3">
        {commits
          ? commits.map(({ actor, payload, created_at, type }, index) => (
              <div className={`d-flex p-2 mb-3 ${styles.card}`} key={index}>
                <div className="mr-2">
                  <img className={styles.avatar} src={actor.avatar_url} />
                </div>
                <div className={styles.bio}>
                  {type === EVENT_TYPE.create ? (
                    <p> {payload.description}</p>
                  ) : (
                    payload.commits.map((commit) => <p>{commit.message}</p>)
                  )}
                  <p className={styles.timestamp}>
                    {parseTimeStamp(created_at)}
                  </p>
                </div>
              </div>
            ))
          : "No commits so far"}
      </div>
    </div>
  );
};

export default Commits;
