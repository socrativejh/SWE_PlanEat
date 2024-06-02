import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import ContentWrapper from "../components/ContentWrapper";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <Header1
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <main className={styles.content}>
        <ContentWrapper />
      </main>
    </div>
  );
};

export default SignIn;
