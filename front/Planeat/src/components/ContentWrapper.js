import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({ className = "" }) => {
  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.contentWrapperChild} />
      <div className={styles.title}>
        <h2 className={styles.h2}>플랜잇과 함께해요 💫</h2>
      </div>
      <div className={styles.info}>
        <b className={styles.b}>기본 정보</b>
        <div className={styles.inputFields}>
          <div className={styles.emailPasswordCampus}>
            <div className={styles.emailPasswordCampusLabel}>
              <div className={styles.div}>이메일</div>
              <div className={styles.div1}>비밀번호</div>
              <div className={styles.div2}>소속 캠퍼스</div>
            </div>
          </div>
          <div className={styles.emailInput}>
            <div className={styles.textboxShortParent}>
              <div className={styles.textboxShort}>
                <div className={styles.text}>
                  <div className={styles.planeat1234} />
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
                  <div className={styles.optionsBackground} />
                  <img
                    className={styles.dropdownChild}
                    alt=""
                    src="/vector-18.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textboxLong}>
              <input
                className={styles.text1}
                placeholder="PLANEAT1234"
                type="text"
              />
            </div>
            <div className={styles.segmentedButton}>
              <div className={styles.buttonSegment1}>
                <div className={styles.container}>
                  <img className={styles.checkIcon} alt="" />
                  <div className={styles.campusButtonLabels}>명륜</div>
                </div>
              </div>
              <div className={styles.buttonSegment2}>
                <div className={styles.container1}>
                  <div className={styles.labelText}>율전</div>
                  <img className={styles.checkIcon1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.allergy}>
        <div className={styles.allergyWrapper}>
          <div className={styles.allergyHeader}>
            <b className={styles.b1}>알레르기 정보</b>
          </div>
          <div className={styles.allergyOptions}>
            <button className={styles.allergyItems}>
              <div className={styles.div3}>해당없음</div>
            </button>
            <button className={styles.allergyItems1}>
              <div className={styles.div4}>땅콩</div>
            </button>
            <button className={styles.allergyItems2}>
              <div className={styles.div5}>갑각류</div>
            </button>
            <button className={styles.allergyItems3}>
              <div className={styles.div6}>대두</div>
            </button>
            <button className={styles.allergyItems4}>
              <div className={styles.div7}>견과류</div>
            </button>
            <div className={styles.allergyItems5}>
              <div className={styles.div8}>밀</div>
            </div>
            <div className={styles.allergyItems6}>
              <div className={styles.div9}>오징어</div>
            </div>
            <button className={styles.allergyItems7}>
              <div className={styles.div10}>복숭아</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.signup}>
        <button className={styles.signupButton}>
          <b className={styles.b2}>가입하기</b>
        </button>
      </div>
    </section>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
