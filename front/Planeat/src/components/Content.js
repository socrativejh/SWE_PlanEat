import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Content.module.css";
import MenuList from "./MenuList";
import ToggleButton from "./ToggleButton";

const Content = ({ className = "", onToggle }) => {
  const [mapSrc, setMapSrc] = useState("/map_dummy.png");
  const [showMenus, setShowMenus] = useState(true); // State to control the visibility of specific MenuLists

  const handleToggle = (toggled) => {
    setMapSrc(toggled ? "/myeong_map.png" : "/map_dummy.png");
    setShowMenus(!toggled); // Toggle menu visibility based on the toggle button state
    if (onToggle) {
      onToggle(toggled);
    }
  };

  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.restaurantWrapper}>
          <div className={styles.restaurant}>
            <div className={styles.restaurantDetails}>
              <div className={styles.restaurantInfo}>
                <div className={styles.OkRyuLabel}>
                  <MenuList name="옥류천식당" className={showMenus ? styles.hidden : ""} />
                </div>
                <div className={styles.GeumJandiLabel}>
                  <MenuList name="금잔디식당" className={showMenus ? styles.hidden : ""} />
                </div>
                <div className={styles.GSJLabel}>
                  <MenuList name="구시재" className={!showMenus ? styles.hidden : ""} />
                </div>
                <div className={styles.BGoeulLabel}>
                  <MenuList name="법고을식당" className={showMenus ? styles.hidden : ""} />
                </div>
              </div>
              <div>
                <div className={styles.HORLabel}>
                  <MenuList name="해오름" className={!showMenus ? styles.hidden : ""} />  
                </div>
                <div className={styles.FacultyLabel}>
                  <MenuList name="패컬티식당" className={showMenus ? styles.hidden : ""} />
                </div>
                <div className={styles.EunHaengLabel}>
                  <MenuList name="은행골식당" className={showMenus ? styles.hidden : ""} />
                </div>
              </div>
                
            </div>
            <div className={styles.container}>
              <div className={styles.div8}>
                <div className={styles.wrapper1}>
                  <img className={styles.icon} alt="" src={mapSrc} />
                </div>
                <div className={styles.HDGLabel}>
                  <MenuList name="행단골" className={!showMenus ? styles.hidden : ""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filtersParent}>
          <div className={styles.toggle}>
            <ToggleButton labels={['율', '명']} onToggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func,
};

export default Content;
