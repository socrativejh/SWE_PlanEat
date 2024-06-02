import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './MenuList.module.css';

const MenuList = ({name, className}) => {
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

  const redirectToPage = () => {
    navigate('/restaurant-chosen'); // Replace with actual target page
  };

  return (
    <div className={[styles.menuList, className].join(' ')}>
      <div className={styles.toggleContainer}>
        <span className={styles.label}>{name}</span>
        <button onClick={redirectToPage} className={styles.toggleButton}>
          +
        </button>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            {item.name} <span className={styles.price}>{item.price}원</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
