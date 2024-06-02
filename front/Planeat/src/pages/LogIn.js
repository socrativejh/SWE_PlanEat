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

  const onLoginClick = useCallback((email, password) => {
    console.log("로그인 시도", { email, password });
    // 예: 로그인 요청 보내기
    // navigate("/dashboard"); // 로그인 후 이동할 페이지
  }, []);

  const onRegisterClick = useCallback(() => {
    // 회원가입 버튼 클릭 시 실행할 코드
    console.log("회원가입 버튼 클릭됨");
    // 예: 회원가입 페이지로 이동
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <section className={styles.content}>
        <FrameComponent3 onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      </section>
    </div>
  );
};

export default LogIn;
