import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <section className={styles.content}>
        <FrameComponent3 />
      </section>
    </div>
  );
};

export default LogIn;
