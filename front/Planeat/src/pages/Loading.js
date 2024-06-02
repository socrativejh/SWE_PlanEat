import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Loading.module.css";

const Loading = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.loading}>
      <main className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/vector-19.svg" />
        <img className={styles.frameItem} alt="" src="/vector-21.svg" />
        <img className={styles.frameInner} alt="" src="/vector-20.svg" />
      </main>
      <h3 className={styles.h3}>플래닛에 오신 것을 환영해요! 🛸</h3>
      <div className={styles.loadingInner}>
        <button className={styles.wrapper} onClick={onFrameButtonClick}>
          <b className={styles.b}>시작하기</b>
        </button>
      </div>
    </div>
  );
};

export default Loading;
