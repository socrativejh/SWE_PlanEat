import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ContentWrapper1.module.css";

const ContentWrapper1 = ({ className = "" , userData}) => {
  const navigate = useNavigate();
  
  const onBackButtonClick = useCallback(() => {
    navigate("/Home")
  }, [navigate]);
  
  console.log(userData.allergies)

  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.contentWrapperChild} />
      <div className={styles.pageTitle}>
        <h2 className={styles.h2}>마이 페이지</h2>
      </div>
      <div className={styles.userInfo}>
        <b className={styles.b}>기본 정보</b>
        <div className={styles.infoDetails}>
          <div className={styles.infoFields}>
            <div className={styles.infoFieldLabels}>
              <div className={styles.div}>이메일</div>
              <div className={styles.div2}>소속 캠퍼스</div>
            </div>
          </div>
          <div className={styles.infoInputs}>
            <div className={styles.emailInput}>
                <div
                  className={styles.text}>
                    {userData.email}
                  </div>
              <div className={styles.emailselectbox}>
                <div className={styles.selectboxBackground} />
              </div>
            </div>
            <div className={styles.segmentedButton}>
              <div className={styles.buttonSegment1}>
                <div className={styles.container}>
                  <img
                    className={styles.checkIcon}
                    loading="lazy"
                    alt=""
                    src={userData.userCampus === "명륜" ? "/check-icon.svg" : ""}
                  />
                  <div className={styles.toggleLabel}>명륜</div>
                </div>
              </div>
              <div className={styles.buttonSegment2}>
                <div className={styles.container1}>
                  <div className={styles.labelText}>율전</div>
                  <img
                    className={styles.checkIcon1}
                    alt=""
                    src={userData.campus === "율전" ? "/check-icon.svg" : ""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.allergyInfo}>
        <div className={styles.allergyWrapper}>
          <div className={styles.allergyTitle}>
            <b className={styles.b1}>알레르기 정보</b>
          </div>
          <div className={styles.allergyOptions}>
            <button className={styles.allergyOptionList}>
              <div className={styles.div3}>해당없음</div>
            </button>
            <button className={styles.allergyOptionList1}>
              <div className={styles.div4}>땅콩</div>
            </button>
            <button className={styles.allergyOptionList2}>
              <div className={styles.div5}>갑각류</div>
            </button>
            <button className={styles.allergyOptionList3}>
              <div className={styles.div6}>대두</div>
            </button>
            <button className={styles.allergyOptionList4}>
              <div className={styles.div7}>견과류</div>
            </button>
            <div className={styles.allergyOptionList5}>
              <div className={styles.div8}>밀</div>
            </div>
            <button className={styles.allergyOptionList6}>
              <div className={styles.div9}>오징어</div>
            </button>
            <button className={styles.allergyOptionList7}>
              <div className={styles.div10}>복숭아</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.backButton} onClick={onBackButtonClick}>
          <b className={styles.b2}>돌아가기</b>
        </button>
      </div>
    </section>
  );
};

ContentWrapper1.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper1;
