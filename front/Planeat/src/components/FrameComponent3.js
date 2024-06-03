import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";  // useNavigate 추가
import styles from "./FrameComponent3.module.css";
import Dropdown from "./Dropdown";

const FrameComponent3 = ({ className = "", onLoginClick, onRegisterClick }) => {
  const [selectedDomain, setSelectedDomain] = useState('@g.skku.edu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();  // useNavigate 훅 사용

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

  const handleLoginClick = useCallback(() => {
    const fullEmail = `${email}${selectedDomain}`;

    // 로그인 API 요청
    fetch("http://127.0.0.1:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: fullEmail, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 0) {
          alert("로그인 성공: " + data.msg);
          navigate('/home');  // 로그인 성공 시 홈 화면으로 이동
        } else {
          alert("로그인 실패: " + data.msg);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("로그인 중 오류가 발생했습니다.");
      });
  }, [email, selectedDomain, password, navigate]);

  const handleRegisterClick = useCallback(() => {
    navigate('/sign-in');  // 회원가입 버튼 클릭 시 sign-in 페이지로 이동
  }, [navigate]);

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
            <div className={styles.inputFields1}>
              <div className={styles.wrapper}>
                <div className={styles.div1}>비밀번호</div>
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
            </div>
          </div>
          <div className={styles.actionButtons}>
            <div className={styles.loginRegisterButtons}>
              <button
                type="button"
                className={styles.buttonLabels}
                onClick={handleLoginClick}
              >
                <b className={styles.b}>로그인하기</b>
              </button>
              <button
                type="button"
                className={styles.buttonLabels1}
                onClick={handleRegisterClick}  // 회원가입 버튼 클릭 시 handleRegisterClick 호출
              >
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
  onLoginClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};

export default FrameComponent3;