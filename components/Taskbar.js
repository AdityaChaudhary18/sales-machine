import styles from "../styles/Layout.module.scss";
import people from "../images/people.png";
import linkedin from "../images/linkedin.png";

import cloud from "../images/cloud.png";

import Image from "next/image";
const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.userData}>
        <h3>Jean-Samuel Najnudel</h3>
        <p>President</p>
        <p>
          <b>
            Ringover |{" "}
            <span>
              <Image src={people} alt="people" />
            </span>{" "}
            101-250
          </b>
        </p>
        <a href="https://www.ringover.com/">https://www.ringover.com/</a>
        <hr className={styles.solid}></hr>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/company/ringover">
            <Image src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.ringover.com/">
            <Image src={cloud} alt="people" />
          </a>
        </div>
        <hr className={styles.solid}></hr>
      </div>
      <div className={styles.topics}></div>
    </div>
  );
};
export default Taskbar;
