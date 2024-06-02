import React, { useState } from 'react';
import styles from './ToggleButton.module.css';
import PropTypes from 'prop-types';

const ToggleButton = ({ labels, onToggle }) => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
        onToggle(!toggled);
    };

    return (
        <div className={styles.toggleContainer}>
            <div className={styles.ellipse}>
                <div
                    className={`${styles.toggleButton} ${toggled ? styles.toggled : ''}`}
                    onClick={handleToggle}
                >
                    <div className={styles.toggleLabel}>
                        {toggled ? labels[1] : labels[0]}
                    </div>
                </div>
            </div>
        </div>
    );
};

ToggleButton.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default ToggleButton;