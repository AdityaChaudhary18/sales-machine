import styles from "../styles/Layout.module.scss";
import people from "../images/people.png";
import linkedin from "../images/linkedin.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import cloud from "../images/cloud.png";
import link from "../images/link.png";
import language from "../images/language.png";
import web from "../images/web.png";
import video from "../images/video.png";
import mailBlue from "../images/mailBlue.png";
import chat from "../images/chat.png";
import callWhite from "../images/callWhite.png";
import calender from "../images/calender.png";
import edit from "../images/edit.png";
import verified_user from "../images/verified_user.png";
import Image from "next/image";
import { useGlobalContext } from "../state/context";

const Taskbar = () => {
  const { tabs, setTabs, setSelectedTab } = useGlobalContext();

  return (
    <div className={styles.taskbar}>
      <div className={styles.userData}>
        <div className={styles.heading}>
          <h3>Jean-Samuel Najnudel</h3>
          <Image src={edit} alt="edit" />
          <Image src={verified_user} alt="verified_user" />
        </div>

        <p style={{ color: "#6F8C94" }}>President</p>
        <div className={styles.subtitle}>
          <p>
            <b>Ringover</b>
          </p>
          <p>
            <b>|</b>
          </p>

          <Image src={people} alt="people" />
          <p>
            <b>101-250</b>
          </p>
        </div>
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
        <h5>Topics</h5>
        <div className={styles.topics}>
          <button>Some Topic</button>
          <button>Some Topic Name</button>
        </div>
      </section>
      <section className={styles.contactList}>
        <h5>Contacts</h5>
        <div className={styles.contact}>
          <Image src={mail} alt="mail" />
          <p>j.najnudel@ringover.com</p>
        </div>
        <div className={styles.contact}>
          <Image src={phone} alt="phone" />
          <p>+33 07 55 35 23 21</p>
          <p style={{ color: "red", fontSize: "0.7rem" }}>Primary</p>
        </div>
        <div className={styles.contact}>
          <Image src={phone} alt="phone" />
          <p>+33 99 53 05 19 21</p>
        </div>
      </section>
      <section className={styles.additionalList}>
        <h5>Additional</h5>
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
        <div className={styles.buttons}>
          <div className={styles.callButton}>
            <Image src={callWhite} alt="phone" />
          </div>
          <div className={styles.actionIcons}>
            <button
              onClick={() => {
                if (tabs.includes("Video Call") === false) {
                  setTabs([...tabs, "Video Call"]);
                  setSelectedTab(0);
                }
              }}
            >
              <Image src={video} alt="phone" />
            </button>
            <button
              onClick={() => {
                if (tabs.includes("Schedule") === false) {
                  setTabs([...tabs, "Schedule"]);
                  setSelectedTab(1);
                }
              }}
            >
              <Image src={calender} alt="calender" />
            </button>

            <button
              onClick={() => {
                if (tabs.includes("Mail - Compose") === false) {
                  setTabs([...tabs, "Mail - Compose"]);
                  setSelectedTab(2);
                }
              }}
            >
              <Image src={mailBlue} alt="mailBlue" />
            </button>

            <button
              onClick={() => {
                if (tabs.includes("Chat") === false) {
                  setTabs([...tabs, "Chat"]);
                  setSelectedTab(3);
                }
              }}
            >
              <Image src={chat} alt="chat" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Taskbar;
