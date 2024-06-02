import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({
  className = "",
  prop,
  prop1,
  propPadding,
  propMinWidth,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.frameChild} />
      <h3 className={styles.h3}>{prop}</h3>
      <div className={styles.div} style={div1Style}>
        {prop1}
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent2;
