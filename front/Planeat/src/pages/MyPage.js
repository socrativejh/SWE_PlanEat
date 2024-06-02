import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ContentWrapper1 from "../components/ContentWrapper1";
import styles from "./MyPage.module.css";

const MyPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.myPage}>
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <main className={styles.content}>
        <ContentWrapper1 />
      </main>
    </div>
  );
};

export default MyPage;
