import styles from "../styles/Layout.module.scss";
const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <div>
        <h3>Jean-Samuel Najnudel</h3>
        <p>President</p>
        <p>
          <b>
            Ringover | <span></span> 101-250
          </b>
        </p>
      </div>
    </div>
  );
};
export default Taskbar;
