import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ContentWrapper1.module.css";

const ContentWrapper1 = ({ className = "", userData }) => {
  const navigate = useNavigate();
  
  const onBackButtonClick = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

  const getAllergyStyle = (allergy) => {
    return userData.allergies.includes(allergy) ? {
      borderColor: "#702cc3",
      color: "#702cc3" 
    } : {};
  };

  const getCampusStyle = (campus) => {
    return userData.campus === campus ? styles.containerSelected : "";
  };

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
              <div className={styles.textboxLong}>
                <div className={styles.text}>{userData.email}</div>
              </div>
              <div className={styles.emailselectbox}>
                <div className={styles.selectboxBackground} />
              </div>
            </div>
            <div className={styles.segmentedButton}>
            <div className={styles.buttonSegment1}>
                <div className={`${styles.container} ${getCampusStyle("명륜")}`}>
                  <div className={styles.toggleLabel}>명륜</div>
                </div>
              </div>
              <div className={styles.buttonSegment2}>
                <div className={`${styles.container1} ${getCampusStyle("율전")}`}>
                  <div className={styles.labelText}>율전</div>
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
            <div className={styles.allergyOptionList} style={getAllergyStyle("해당없음")}>
              <div className={styles.div3}>해당없음</div>
            </div>
            <div className={styles.allergyOptionList1} style={getAllergyStyle("땅콩")}>
              <div className={styles.div4}>땅콩</div>
            </div>
            <div className={styles.allergyOptionList2} style={getAllergyStyle("갑각류")}>
              <div className={styles.div5}>갑각류</div>
            </div>
            <div className={styles.allergyOptionList3} style={getAllergyStyle("대두")}>
              <div className={styles.div6}>대두</div>
            </div>
            <div className={styles.allergyOptionList4} style={getAllergyStyle("견과류")}>
              <div className={styles.div7}>견과류</div>
            </div>
            <div className={styles.allergyOptionList5} style={getAllergyStyle("밀")}>
              <div className={styles.div8}>밀</div>
            </div>
            <div className={styles.allergyOptionList6} style={getAllergyStyle("오징어")}>
              <div className={styles.div9}>오징어</div>
            </div>
            <div className={styles.allergyOptionList7} style={getAllergyStyle("복숭아")}>
              <div className={styles.div10}>복숭아</div>
            </div>
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
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    campus: PropTypes.string.isRequired,
    allergies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ContentWrapper1;
