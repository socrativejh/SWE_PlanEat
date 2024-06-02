import React, { useState } from 'react';
import styles from './DropdownMenu.module.css'; // Ensure you have this CSS file in the same folder

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <button onClick={toggleDropdown} className={styles.toggleButton}>
        +
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            커피 가디즈 카라멜 <span className={styles.price}>6,500원</span>
          </li>
          <li className={styles.menuItem}>
            콜드 커피스컬 <span className={styles.price}>6,500원</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
