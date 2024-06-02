import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={[styles.titleBackgroundParent, className].join(" ")}>
      <div className={styles.titleBackground} />
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <h2 className={styles.h2}>행단골 - 봄이 온 소반</h2>
            <div className={styles.wrapper}>
              <div className={styles.div}>5월 9일(목) 중식</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <b className={styles.b}>고단백</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
