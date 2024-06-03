import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ContentWrapper1 from "../components/ContentWrapper1";
import styles from "./MyPage.module.css";

const MyPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    campus: '',
    allergies: []
  });

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    const campus = localStorage.getItem('userCampus');
    const allergies = JSON.parse(localStorage.getItem('userAllergies')) || [];

    setUserData({ email, campus, allergies });
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.myPage}>
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <main className={styles.content}>
        <ContentWrapper1 userData={userData} />
      </main>
    </div>
  );
};

export default MyPage;
