import styles from "../styles/Layout.module.scss";
import noWork from "../images/noWork.png";
import note from "../images/note.png";
import record_voice_over from "../images/record_voice_over.png";
import Image from "next/image";
const Workspace = () => {
  return (
    <section className={styles.workshop}>
      <div className={styles.heading}>
        <h3>Workspace</h3>
        <div className={styles.iconsWork}>
          <Image src={record_voice_over} alt="record_voice_over" />
          <Image src={note} alt="note" />
        </div>
      </div>
      <div className={styles.main}>
        <Image src={noWork} alt="No-Work" />
        <h3>Your workspace is empty!</h3>
        <p>To add a tab, click on any option on your bottom left</p>
      </div>
    </section>
  );
};
export default Workspace;
