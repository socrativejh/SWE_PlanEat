import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Header from "../components/Header";
import Content from "../components/Content";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [campus, setCampus] = useState(0);

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const handleToggle = (toggled) => {
    setCampus(toggled ? "명" : "율");
  };

  return (
    <div className={styles.home}>
      <img className={styles.icon} alt="" src="/-1--1@2x.png" />
      <section className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div} />
          <Header
            user1="/user1.svg"
            onLogoContainerClick={onLogoContainerClick}
            onUserIconClick={onUserIconClick}
            campus={campus}
          />
          <Content onToggle={handleToggle} />
          <FrameComponent campus={campus} />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerBackground} />
        <div className={styles.planeat2024}>
          PLANEAT © 2024 - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Home;
