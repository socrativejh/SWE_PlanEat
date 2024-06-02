import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <h2 className={styles.h2}>로그인</h2>
      <div className={styles.loginForm}>
        <form className={styles.loginFormContainer}>
          <div className={styles.loginFormFields}>
            <div className={styles.inputFields}>
              <div className={styles.inputLabels}>
                <div className={styles.div}>이메일</div>
              </div>
              <div className={styles.textboxShort}>
                <div className={styles.text}>
                  <div className={styles.planeat1234}>PLANEAT1234</div>
                </div>
              </div>
              <div className={styles.emailselectbox}>
                <div className={styles.dropdownBackground} />
                <input
                  className={styles.selected}
                  placeholder="@g.skku.edu"
                  type="text"
                />
                <div className={styles.dropdown}>
                  <div className={styles.dropdownChild} />
                  <img
                    className={styles.dropdownItem}
                    alt=""
                    src="/vector-18.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputFields1}>
              <div className={styles.wrapper}>
                <div className={styles.div1}>비밀번호</div>
              </div>
              <div className={styles.textboxLong}>
                <input
                  className={styles.text1}
                  placeholder="PLANE"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <div className={styles.loginRegisterButtons}>
              <button className={styles.buttonLabels}>
                <b className={styles.b}>로그인하기</b>
              </button>
              <button className={styles.buttonLabels1}>
                <div className={styles.div2}>회원가입하기</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
