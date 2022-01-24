import Head from "next/head";
import Image from "next/image";
import Taskbar from "../components/Taskbar";
import Workspace from "../components/Workspace";
import ProfileHub from "../components/ProfileHub";
import styles from "../styles/Layout.module.scss";
export default function Home() {
  return (
    <div className={styles.home}>
      <Taskbar />
      <Workspace />
      <ProfileHub />
    </div>
  );
}
