import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "", prop, prop1, propMinWidth }) => {
  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.parent}>
        <div className={styles.div}>해오름</div>
        <h3 className={styles.h3}>{prop}</h3>
      </div>
      <div className={styles.div1} style={divStyle}>
        {prop1}
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
