import styles from "../styles/Layout.module.scss";
import upload from "../images/upload.png";
import pause from "../images/pause.png";
import stop from "../images/stop.png";

import Image from "next/image";
const ProfileHub = () => {
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
          <button>Activity</button>
          <button>Tasks</button>
          <button>Progress</button>
        </div>
      </section>
    </div>
  );
};
export default ProfileHub;
