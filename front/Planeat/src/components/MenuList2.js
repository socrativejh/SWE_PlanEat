import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuList2.module.css";

const MenuList = ({ name, className }) => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  // // const baseUrl = 'http://127.0.0.1:8000/api/v1';
  // // useEffect(() => {
  // //   const fetchMenuItems = async () => {
  // //     try {
  // //       const response = await fetch(`${baseUrl}/menus/`, {method: 'GET',
  // //       mode: 'cors',
  // //       headers: {
  // //       'Content-Type': 'application/json',
  // //       },});
  // //       if (response.ok) {
  // //         const data = await response.json();
  // //         setMenuItems(data);
  // //       } else {
  // //         console.error("Failed to fetch menu items")
  // //       }
  // //     } catch (error) {
  // //       console.error('Error fetching menu:', error);
  // //     }
  // //   };

  //   fetchMenuItems();
  // }, []);

  const redirectToPage1 = () => {
    navigate("/restaurant-chosen/1");
  };

  const redirectToPage2 = () => {
    navigate("/restaurant-chosen/2");
  };

  const handleClick = () => {
    if (name === "행단골") {
      redirectToPage2();
    } else if (name === "해오름") {
      redirectToPage1();
    } else {
      // 기본 동작 또는 다른 name 값에 대한 처리
      navigate("/default-page"); // 기본 페이지로 이동
    }
  };

  return (
    <div className={[styles.menuList, className].join(" ")}>
      <div className={styles.toggleContainer}>
        <span className={styles.label}>{name}</span>
        <button onClick={handleClick} className={styles.toggleButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default MenuList;
