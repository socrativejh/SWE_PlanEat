import PropTypes from "prop-types";
import styles from "./Information.module.css";

const Information = ({ className = "" }) => {
  return (
    <div className={[styles.information, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.nutritionDetails}>
        <div className={styles.nutritionTitle}>
          <b className={styles.b}>영양정보</b>
          <div className={styles.nutritionUnit}>
            <div className={styles.g}>*100g 기준</div>
          </div>
        </div>
        <div className={styles.allergyInfo}>
          <div className={styles.div}>※ 갑각류, 대두 알레르기 주의</div>
        </div>
      </div>
      <div className={styles.nutritionTable}>
        <img
          className={styles.tableIcon}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table}>
          <div className={styles.div1}>메뉴</div>
          <div className={styles.div2}>단백질</div>
          <div className={styles.div3}>탄수화물</div>
          <div className={styles.div4}>지방</div>
          <div className={styles.div5}>당</div>
          <div className={styles.div6}>열량</div>
        </div>
        <img
          className={styles.tableIcon1}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table1}>
          <div className={styles.div7}>우삼겹고추장찌개</div>
          <div className={styles.g1}>12g</div>
          <div className={styles.g2}>30g</div>
          <div className={styles.g3}>6g</div>
          <div className={styles.g4}>4g</div>
          <div className={styles.kcal}>80kcal</div>
        </div>
        <img
          className={styles.tableIcon2}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table2}>
          <div className={styles.div8}>알찬소시지전*케찹</div>
          <div className={styles.g5}>12g</div>
          <div className={styles.g6}>30g</div>
          <div className={styles.g7}>6g</div>
          <div className={styles.g8}>4g</div>
          <div className={styles.kcal1}>80kcal</div>
        </div>
        <img
          className={styles.tableIcon3}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table3}>
          <div className={styles.div9}>잔멸치볶음</div>
          <div className={styles.g9}>12g</div>
          <div className={styles.g10}>30g</div>
          <div className={styles.g11}>6g</div>
          <div className={styles.g12}>4g</div>
          <div className={styles.kcal2}>80kcal</div>
        </div>
        <img
          className={styles.tableIcon4}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table4}>
          <div className={styles.div10}>쌀밥</div>
          <div className={styles.g13}>12g</div>
          <div className={styles.g14}>30g</div>
          <div className={styles.g15}>6g</div>
          <div className={styles.g16}>4g</div>
          <div className={styles.kcal3}>80kcal</div>
        </div>
        <img
          className={styles.tableIcon5}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
        <div className={styles.table5}>
          <div className={styles.div11}>배추김치</div>
          <div className={styles.g17}>12g</div>
          <div className={styles.g18}>30g</div>
          <div className={styles.g19}>6g</div>
          <div className={styles.g20}>4g</div>
          <div className={styles.kcal4}>80kcal</div>
        </div>
        <img
          className={styles.tableIcon6}
          loading="lazy"
          alt=""
          src="/vector-17.svg"
        />
      </div>
    </div>
  );
};

Information.propTypes = {
  className: PropTypes.string,
};

export default Information;
