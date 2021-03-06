import styles from "../styles/Layout.module.scss";
import noWork from "../images/noWork.png";
import note from "../images/note.png";
import record_voice_over from "../images/record_voice_over.png";
import close from "../images/close.png";
import sidebar from "../images/sidebar.jpg";
import Image from "next/image";
import { useGlobalContext } from "../state/context";
import React, { useEffect } from "react";
const Workspace = () => {
  const {
    tabs,
    setTabs,
    setSelectedTab,
    selectedTab,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useGlobalContext();

  const tabData = {
    Chat: 3,
    Schedule: 1,
    "Video Call": 0,
    "Mail - Compose": 2,
  };

  useEffect(() => {
    setSelectedTab(tabData[tabs[0]]);
  }, [tabs]);

  return (
    <section className={styles.workshop}>
      <div className={styles.heading}>
        <h3>Workspace</h3>
        <div className={styles.iconsWork}>
          <Image src={record_voice_over} alt="record_voice_over" />
          <Image src={note} alt="note" />
        </div>
        <div className={styles.sidebar}>
          <button
            style={{ border: "0", backgroundColor: "#fff" }}
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <Image src={sidebar} alt="sidebar" />
          </button>
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
        <section>
          <div className={styles.tabList}>
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  className={
                    selectedTab === index
                      ? styles.selectedTabButton
                      : styles.tabButton
                  }
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                >
                  <div className={styles.tab}>
                    <p> {tab}</p>
                    <button
                      onClick={() => {
                        const newTabs = tabs.filter(
                          (tabName) => tabName !== tab
                        );
                        setTabs(newTabs);
                        if (tabs.length !== 0) {
                          setSelectedTab(`${tabData[tabs[0]]}`);
                        }
                      }}
                    >
                      <Image src={close} alt="close" />
                    </button>
                  </div>
                </button>
              );
            })}
          </div>
          <div className={styles.workspaceMain}>
            {(selectedTab == 0 && <VideoCall />) ||
              (selectedTab == 1 && <Calender />) ||
              (selectedTab == 2 && <Mail />) ||
              (selectedTab == 3 && <Chat />)}
          </div>
        </section>
      )}
    </section>
  );
};

const VideoCall = () => {
  return <div>VideoCall</div>;
};
const Calender = () => {
  return <div>Calender</div>;
};
const Mail = () => {
  return <div>Mail</div>;
};
const Chat = () => {
  return <div>Chat</div>;
};
export default Workspace;
