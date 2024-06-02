import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "", onLoginClick, onRegisterClick }) => {
  const [selectedDomain, setSelectedDomain] = useState('@g.skku.edu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    onLoginClick(fullEmail, password);
  }, [email, selectedDomain, password, onLoginClick]);

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
                  type="password"
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
            <div className={styles.inputFields1}>
              <div className={styles.wrapper}>
                <div className={styles.div1}>비밀번호</div>
              </div>
              <div className={styles.textboxLong}>
                <input
                  className={styles.text1}
                  placeholder="비밀번호를 입력하세요."
                  type="text"
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
                onClick={onLoginClick}
              >
                <b className={styles.b}>로그인하기</b>
              </button>
              <button
                type="button"
                className={styles.buttonLabels1}
                onClick={onRegisterClick}
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
