// Dropdown.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={toggleDropdown}>
        {selectedOption}
        <img className={styles.arrow} src="/dropdown.svg" alt="Dropdown arrow" />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
