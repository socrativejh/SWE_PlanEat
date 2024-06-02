import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({ className = "", onRegisterClick }) => {
  const [selectedDomain, setSelectedDomain] = useState('@g.skku.edu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("명륜"); // 초기 선택 상태
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDomain = (domain) => {
    setSelectedDomain(domain);
    setIsDropdownOpen(false);
  };

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleCampusClick = useCallback((campus) => {
    setSelectedCampus(campus);
  }, []);

  const handleAllergyClick = (allergy) => {
    setSelectedAllergies((prevSelected) => {
      if (prevSelected.includes(allergy)) {
        return prevSelected.filter((item) => item !== allergy);
      } else {
        return [...prevSelected, allergy];
      }
    });
  };

  const getButtonStyle = (campus) => {
    return selectedCampus === campus ? {
      backgroundColor: "#363636",
      borderTopLeftRadius: campus === "명륜" ? "8px" : "0",
      borderBottomLeftRadius: campus === "명륜" ? "8px" : "0",
      borderTopRightRadius: campus === "율전" ? "8px" : "0",
      borderBottomRightRadius: campus === "율전" ? "8px" : "0"
    } : {};
  };

  const getAllergyStyle = (allergy) => {
    return selectedAllergies.includes(allergy)
      ? { borderColor: "#702cc3", color: "#702cc3" }
      : {};
  };

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
                <input
                  className={styles.text1}
                  placeholder="이메일을 입력하세요."
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>



              <div className={styles.emailselectbox}>
                <div className={styles.dropdownBackground} />
                <input
                  className={styles.selected}
                  value={selectedDomain}
                  onClick={toggleDropdown}
                  readOnly
                />
                <div className={styles.dropdown}>
                  <div className={styles.dropdownChild} />
                  <img
                    className={styles.dropdownItem}
                    alt=""
                    src="/vector-18.svg"
                    onClick={toggleDropdown}
                  />
                </div>
                {isDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div
                      className={styles.dropdownOption}
                      onClick={() => selectDomain("@g.skku.edu")}
                    >
                      @g.skku.edu
                    </div>
                    <div
                      className={styles.dropdownOption}
                      onClick={() => selectDomain("@skku.edu")}
                    >
                      @skku.edu
                    </div>
                  </div>
                )}
              </div>



            </div>
            <div className={styles.textboxLong}>
              <input
                className={styles.text1}
                placeholder="비밀번호를 입력하세요."
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            

            <div className={styles.segmentedButton}>
              <div
                className={styles.buttonSegment1}
                style={getButtonStyle("명륜")}
                onClick={() => handleCampusClick("명륜")}
              >
                <div className={styles.container}>
                  <img className={styles.checkIcon} alt="" src={selectedCampus === "명륜" ? "/check-icon.svg" : ""} />
                  <div className={styles.campusButtonLabels}>명륜</div>
                </div>
              </div>
              <div
                className={styles.buttonSegment2}
                style={getButtonStyle("율전")}
                onClick={() => handleCampusClick("율전")}
              >
                <div className={styles.container1}>
                  <div className={styles.labelText}>율전</div>
                  <img className={styles.checkIcon1} alt="" src={selectedCampus === "율전" ? "/check-icon.svg" : ""} />
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
            <button
              className={styles.allergyItems}
              style={getAllergyStyle("해당없음")}
              onClick={() => handleAllergyClick("해당없음")}
            >
              <div className={styles.div3}>해당없음</div>
            </button>
            <button
              className={styles.allergyItems1}
              style={getAllergyStyle("땅콩")}
              onClick={() => handleAllergyClick("땅콩")}
            >
              <div className={styles.div4}>땅콩</div>
            </button>
            <button
              className={styles.allergyItems2}
              style={getAllergyStyle("갑각류")}
              onClick={() => handleAllergyClick("갑각류")}
            >
              <div className={styles.div5}>갑각류</div>
            </button>
            <button
              className={styles.allergyItems3}
              style={getAllergyStyle("대두")}
              onClick={() => handleAllergyClick("대두")}
            >
              <div className={styles.div6}>대두</div>
            </button>
            <button
              className={styles.allergyItems4}
              style={getAllergyStyle("견과류")}
              onClick={() => handleAllergyClick("견과류")}
            >
              <div className={styles.div7}>견과류</div>
            </button>
            <button
              className={styles.allergyItems5}
              style={getAllergyStyle("밀")}
              onClick={() => handleAllergyClick("밀")}
            >
              <div className={styles.div8}>밀</div>
            </button>
            <button
              className={styles.allergyItems6}
              style={getAllergyStyle("오징어")}
              onClick={() => handleAllergyClick("오징어")}
            >
              <div className={styles.div9}>오징어</div>
            </button>
            <button
              className={styles.allergyItems7}
              style={getAllergyStyle("복숭아")}
              onClick={() => handleAllergyClick("복숭아")}
            >
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
