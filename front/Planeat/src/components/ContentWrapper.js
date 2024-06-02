import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Dropdown from "./Dropdown";

const ContentWrapper = ({ className = "" }) => {
  const navigate = useNavigate();

  const [clickedButton, setClickedButton] = useState(null);
  const [clickedAllergyButtons, setClickedAllergyButtons] = useState([]);

  const onRegisterClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const handleButtonClick = useCallback((button) => {
    setClickedButton(button);
  }, []);

  const handleAllergyButtonClick = useCallback((button) => {
    setClickedAllergyButtons(prevState =>
      prevState.includes(button)
        ? prevState.filter(b => b !== button)
        : [...prevState, button]
    );
  }, []);

  const allergyOptions = [
    { label: '해당없음', className: styles.allergyItems },
    { label: '땅콩', className: styles.allergyItems1 },
    { label: '갑각류', className: styles.allergyItems2 },
    { label: '대두', className: styles.allergyItems3 },
    { label: '견과류', className: styles.allergyItems4 },
    { label: '밀', className: styles.allergyItems5 },
    { label: '오징어', className: styles.allergyItems6 },
    { label: '복숭아', className: styles.allergyItems7 },
  ];

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
                <input className={styles.text1} />
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
                <div
                  className={`${styles.container} ${
                    clickedButton === 'myeong' ? styles.clicked : ''
                  }`}
                  onClick={() => handleButtonClick('myeong')}
                >
                  <img className={styles.checkIcon} alt="" />
                  <div className={styles.campusButtonLabels}>명륜</div>
                </div>
              </div>
              <div className={styles.buttonSegment2}>
                <div
                  className={`${styles.container1} ${
                    clickedButton === 'yul' ? styles.clicked : ''
                  }`}
                  onClick={() => handleButtonClick('yul')}
                >
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
            {allergyOptions.map((option, index) => (
              <button
                key={index}
                className={`${option.className} ${clickedAllergyButtons.includes(option.label) ? styles.clicked : ''}`}
                onClick={() => handleAllergyButtonClick(option.label)}
              >
                <div className={styles[`div${index + 3}`]}>{option.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.signup}>
        <button className={styles.signupButton} onClick={onRegisterClick}>
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
