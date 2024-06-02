import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  propLeft,
  propTop,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <h3 className={styles.h3}>
        <p className={styles.p}>{prop}</p>
        <p className={styles.p1}>{prop1}</p>
        <p className={styles.p2}>{prop2}</p>
        <p className={styles.p3}>{prop3}</p>
        <p className={styles.p4}>{prop4}</p>
      </h3>
      <div className={styles.div}>{prop5}</div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
  prop5: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default GroupComponent3;
