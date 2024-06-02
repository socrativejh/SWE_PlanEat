import PropTypes from "prop-types";
import styles from "./Header.module.css";


const Header = ({
  className = "",
  user1,
  onLogoContainerClick,
  onUserIconClick,
}) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerBackground} />
      <div className={styles.logo} onClick={onLogoContainerClick}>
        <a href="/" className={styles.planeat}>PLANEAT</a>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.timeUserSelection}>
          <div className={styles.timeselect}>
            <div className={styles.mealSelectionBackground} />
            <div className={styles.breakfastSelection}>
              <div className={styles.breakfastBackground} />
              <a className={styles.a}>조식</a>
            </div>
            <a className={styles.a1}>중식</a>
            <a className={styles.a2}>석식</a>
          </div>
          <div className={styles.userSelection}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src={user1}
              onClick={onUserIconClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  user1: PropTypes.string,

  /** Action props */
  onLogoContainerClick: PropTypes.func,
  onUserIconClick: PropTypes.func,
};

export default Header;
