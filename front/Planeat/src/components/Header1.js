import PropTypes from "prop-types";
import styles from "./Header1.module.css";

const Header1 = ({ className = "", onLogoContainerClick, onUserIconClick }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
      <div className={styles.logo} onClick={onLogoContainerClick}>
        <a href="/" className={styles.planeat}>PLANEAT</a>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.userTime}>
          <div className={styles.timeselect}>
            <div className={styles.mealSelectBackground} />
            <div className={styles.breakfast}>
              <div className={styles.breakfastBackground} />
              <a className={styles.a}>조식</a>
            </div>
            <a className={styles.a1}>중식</a>
            <a className={styles.a2}>석식</a>
          </div>
          <div className={styles.user}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
              onClick={onUserIconClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onLogoContainerClick: PropTypes.func,
  onUserIconClick: PropTypes.func,
};

export default Header1;
