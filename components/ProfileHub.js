import styles from "../styles/Layout.module.scss";
import upload from "../images/upload.png";
import pause from "../images/pause.png";
import stop from "../images/stop.png";
import React, { useState } from "react";

import Image from "next/image";
const ProfileHub = () => {
  const [selected, setSelected] = useState("Tasks");
  const [activeTab, setActiveTab] = useState({ 0: false, 1: true, 2: false });
  const changeHub = (selection) => {
    if (selection === "Activity") {
      setSelected("Activity");
      setActiveTab({ 0: true, 1: false, 2: false });
    } else if (selection === "Tasks") {
      setSelected("Tasks");
      setActiveTab({ 0: false, 1: true, 2: false });
    } else if (selection === "Progress") {
      setSelected("Progress");
      setActiveTab({ 0: false, 1: false, 2: true });
    }
  };
  return (
    <div className={styles.profileHub}>
      <section className={styles.buttons}>
        <button className={styles.iconButton}>
          <div className={styles.buttonIcon}>
            <Image src={upload} alt="upload" />
            <p>Salesforce</p>
          </div>
        </button>
        <div className={styles.pausePlay}>
          <Image src={pause} alt="pause" />
          <Image src={stop} alt="stop" />
        </div>
      </section>
      <section className={styles.hub}>
        <div className={styles.hubOptions}>
          <button
            onClick={() => changeHub("Activity")}
            className={activeTab[0] ? styles.active : undefined}
          >
            Activity
          </button>
          <button
            onClick={() => changeHub("Tasks")}
            className={activeTab[1] ? styles.active : undefined}
          >
            Tasks
          </button>
          <button
            onClick={() => changeHub("Progress")}
            className={activeTab[2] ? styles.active : undefined}
          >
            Progress
          </button>
        </div>
        <div className={styles.hubText}>
          {selected === "Activity" ? (
            <Activity />
          ) : selected === "Tasks" ? (
            <Tasks />
          ) : (
            <Progress />
          )}
        </div>
      </section>
    </div>
  );
};

const Activity = () => {
  return <div>Activity</div>;
};
const Tasks = () => {
  return <div>Tasks</div>;
};
const Progress = () => {
  return <div>Progress</div>;
};
export default ProfileHub;
