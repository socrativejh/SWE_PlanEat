import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./ContentWrapper.module.css";
import Dropdown from "./Dropdown";

const ContentWrapper = ({ className = "", onRegisterClick }) => {
  const [selectedDomain, setSelectedDomain] = useState('@g.skku.edu');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("명륜");
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const allergiesMap = {
    "해당없음": 1,
    "땅콩": 2,
    "갑각류": 3,
    "대두": 4,
    "견과류": 9,
    "밀": 5,
    "오징어": 6,
    "복숭아": 7
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
  

  const handleSignupClick = async () => {
    const fullEmail = `${email}${selectedDomain}`;
    const allergyIds = selectedAllergies.map(allergy => allergiesMap[allergy]);
    const payload = {
      email: fullEmail,
      password,
      allergies: allergyIds,
      campus_id: selectedCampus === "명륜" ? 1 : 2,
    };

    const baseUrl = 'http://127.0.0.1:8000/api/v1/';
    try {
      console.log(payload);
      const response = await fetch(`${baseUrl}users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.result === 0) {
        // Store user information in localStorage
        localStorage.setItem('userEmail', fullEmail);
        localStorage.setItem('userCampus', selectedCampus);
        localStorage.setItem('userAllergies', JSON.stringify(selectedAllergies));

        alert("회원가입 성공");
        navigate("/log-in", { state: { email: fullEmail, campus: selectedCampus, allergies: selectedAllergies } }); // Redirect to login page with state
      } else if (response.ok) {
        setErrorMessage(data.msg);
      } else setErrorMessage('* 모든 필드를 채워주세요.');
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('* 모든 필드를 채워주세요.');
    }
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
              <div className={styles.dropdowncontainer}>
                <Dropdown
                  options={["@g.skku.edu", "@skku.edu"]}
                  selectedOption={selectedDomain}
                  onSelect={setSelectedDomain}
                />
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
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <div className={styles.signup}>
        <button className={styles.signupButton} onClick={handleSignupClick}>
          <b className={styles.b2}>가입하기</b>
        </button>
      </div>
    </section>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
  onRegisterClick: PropTypes.func,
};

export default ContentWrapper;
