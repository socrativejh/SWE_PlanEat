import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <GroupComponent prop="뚝배기만두닭곰탕" prop1="5,500원" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.parent}>
          <div className={styles.div}>구시재</div>
          <h3 className={styles.h3}>
            <p className={styles.p}>로제소스스파게티</p>
            <p className={styles.p1}>쌀밥</p>
            <p className={styles.p2}>브로콜리브리프</p>
            <p className={styles.p3}>돈까스*스프</p>
            <p className={styles.p4}>치즈시즈닝감자튀김</p>
          </h3>
        </div>
        <div className={styles.div1}>8,000원</div>
      </div>
      <GroupComponent
        prop="뚝배기만두닭곰탕"
        prop1="5,500원"
        propMinWidth="3.375rem"
      />
      <GroupComponent
        prop="전주식콩나물밥+치즈함박"
        prop1="6,500원"
        propMinWidth="3.438rem"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
