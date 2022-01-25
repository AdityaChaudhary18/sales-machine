import styles from "../styles/Layout.module.scss";
import noWork from "../images/noWork.png";
import note from "../images/note.png";
import record_voice_over from "../images/record_voice_over.png";
import close from "../images/close.png";
import Image from "next/image";
import { useGlobalContext } from "../state/context";

const Workspace = () => {
  const { tabs, setTabs } = useGlobalContext();

  return (
    <section className={styles.workshop}>
      <div className={styles.heading}>
        <h3>Workspace</h3>
        <div className={styles.iconsWork}>
          <Image src={record_voice_over} alt="record_voice_over" />
          <Image src={note} alt="note" />
        </div>
      </div>
      {tabs.length === 0 && (
        <div className={styles.main}>
          <Image src={noWork} alt="No-Work" />
          <h3>Your workspace is empty!</h3>
          <p>To add a tab, click on any option on your bottom left</p>
        </div>
      )}
      {tabs.length !== 0 && (
        <div className={styles.tabList}>
          {tabs.map((tab, index) => {
            return (
              <div key={index} className={styles.tab}>
                <p> {tab}</p>
                <button
                  onClick={() => {
                    const newTabs = tabs.filter((tabName) => tabName !== tab);
                    setTabs(newTabs);
                  }}
                >
                  <Image src={close} alt="close" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
export default Workspace;
