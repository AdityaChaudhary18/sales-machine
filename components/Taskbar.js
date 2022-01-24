import styles from "../styles/Layout.module.scss";
import people from "../images/people.png";
import linkedin from "../images/linkedin.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import cloud from "../images/cloud.png";
import link from "../images/link.png";
import language from "../images/language.png";
import web from "../images/web.png";

import Image from "next/image";
const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.userData}>
        <h3>Jean-Samuel Najnudel</h3>
        <p>President</p>
        <p>
          <b>
            Ringover |
            <span>
              <Image src={people} alt="people" />
            </span>
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
      <section className={styles.topicList}>
        <h3>Topics</h3>
        <div className={styles.topics}>
          <button>Some Topic</button>
          <button>Some Topic Name</button>
        </div>
      </section>
      <section className={styles.contactList}>
        <h3>Contacts</h3>
        <div className={styles.contact}>
          <Image src={mail} alt="mail" />
          <p>j.najnudel@ringover.com</p>
        </div>
        <div className={styles.contact}>
          <Image src={phone} alt="phone" />
          <p>+33 07 55 35 23 21</p>
        </div>
        <div className={styles.contact}>
          <Image src={phone} alt="phone" />
          <p>+33 99 53 05 19 21</p>
        </div>
      </section>
      <section className={styles.additionalList}>
        <h3>Additional</h3>
        <div className={styles.additionals}>
          <Image src={mail} alt="mail" />
          <p>president@ringover.com</p>
        </div>
        <div className={styles.additionals}>
          <Image src={language} alt="phone" />
          <p>Français</p>
        </div>
        <div className={styles.additionals}>
          <Image src={link} alt="phone" />
          <p>www.youtube.com/ringover</p>
        </div>
        <div className={styles.additionals}>
          <Image src={web} alt="phone" />
          <p>Indian Standard (+5:30)</p>
        </div>
      </section>
    </div>
  );
};
export default Taskbar;
