import GroupComponent3 from "./GroupComponent3";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.infoListParent}>
          <div className={styles.infoList}>
            <div className={styles.basicInfo}>
              <h3 className={styles.h3}>기본 정보</h3>
            </div>
            <div className={styles.div}>
              <p className={styles.p}>위치 : 학생회관 1층</p>
              <p className={styles.p1}>연락처 : 031-294-8148</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.p2}>* 주말 및 공휴일 휴무</p>
            </div>
          </div>
          <div className={styles.operationHours}>
            <h3 className={styles.h31}>운영시간</h3>
            <div className={styles.semesterHours}>
              <div className={styles.div1}>학기 중</div>
              <div className={styles.div2}>
                <p className={styles.p3}>
                  조식 - 팝업델리(천원학식) 08:00~09:00
                </p>
                <p className={styles.p4}>중식 - 1층 소반/싱푸차이나/가츠엔</p>
                <p className={styles.p5}>2층 나폴리폴리 11:00~13:30</p>
                <p className={styles.p6}>커피엔(카페) - 10:30~15:00</p>
              </div>
            </div>
          </div>
          <div className={styles.vacationHours}>
            <div className={styles.vacation}>
              <div className={styles.div3}>방학 중</div>
              <div className={styles.div4}>
                <p className={styles.p7}>팝업델리 1층 08:00~13:30</p>
                <p className={styles.p8}>커피엔(카페) - 11:00~15:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoImageWrapper}>
        <img
          className={styles.infoImageIcon}
          loading="lazy"
          alt=""
          src="/vector-25.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>봄이 온 소반</h2>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h3 className={styles.h32}>뚝배기만두닭곰탕</h3>
            <div className={styles.div5}>5,500원</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h3 className={styles.h33}>전주식콩나물밥+치즈함박</h3>
            <div className={styles.div6}>6,500원</div>
          </div>
          <GroupComponent3
            prop="돼지고기김치찌개"
            prop1="쌀밥"
            prop2="계란말이*케찹"
            prop3="환어묵볶음"
            prop4="김구이 ..."
            prop5="8,000원"
          />
          <GroupComponent3
            prop="로제소스스파게티"
            prop1="쌀밥"
            prop2="브로콜리브리프"
            prop3="돈까스*스프"
            prop4="치즈시즈닝감자튀김"
            prop5="8,000원"
            propLeft="45rem"
            propTop="0rem"
          />
          <GroupComponent3
            prop="우삼겹고추장찌개"
            prop1="알찬소시지전*케찹"
            prop2="잔멸치볶음"
            prop3="쌀밥"
            prop4="배추김치"
            prop5="5,000원"
            propLeft="60rem"
            propTop="0rem"
          />
          <GroupComponent3
            prop="돼지고기김치찌개"
            prop1="쌀밥"
            prop2="계란말이*케찹"
            prop3="환어묵볶음"
            prop4="김구이 ..."
            prop5="8,000원"
            propLeft="0rem"
            propTop="18rem"
          />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <h3 className={styles.h34}>뚝배기만두닭곰탕</h3>
            <div className={styles.div7}>5,500원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
