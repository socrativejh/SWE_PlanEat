import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./RestaurantChosen.module.css";

const RestaurantChosen = () => {
  return (
    <div className={styles.restaurantChosen}>
      <FrameComponent2 />
      <main className={styles.restaurantChosenInner}>
        <section className={styles.frameParent}>
          <FrameComponent1 />
          <img
            className={styles.menuItemsIcon}
            loading="lazy"
            alt=""
            src="/vector-25.svg"
          />
          <div className={styles.menuItems}>
            <div className={styles.wrapper}>
              <b className={styles.b}>싱푸차이나</b>
            </div>
            <div className={styles.frameGroup}>
              <GroupComponent2 prop="뚝배기만두닭곰탕" prop1="5,500원" />
              <GroupComponent2
                prop="전주식콩나물밥+치즈함박"
                prop1="6,500원"
                propPadding="var(--padding-5xl) var(--padding-xl)"
                propMinWidth="3.438rem"
              />
              <GroupComponent1
                prop="로제소스스파게티"
                prop1="쌀밥"
                prop2="브로콜리브리프"
                prop3="돈까스*스프"
                prop4="치즈시즈닝감자튀김"
                prop5="8,000원"
              />
              <GroupComponent1
                prop="우삼겹고추장찌개"
                prop1="알찬소시지전*케찹"
                prop2="잔멸치볶음"
                prop3="쌀밥"
                prop4="배추김치"
                prop5="5,000원"
              />
            </div>
          </div>
          <img
            className={styles.menuItemsIcon1}
            loading="lazy"
            alt=""
            src="/vector-25.svg"
          />
          <div className={styles.menuItems1}>
            <div className={styles.container}>
              <b className={styles.b1}>가츠엔</b>
            </div>
            <div className={styles.frameContainer}>
              <GroupComponent1
                prop="로제소스스파게티"
                prop1="쌀밥"
                prop2="브로콜리브리프"
                prop3="돈까스*스프"
                prop4="치즈시즈닝감자튀김"
                prop5="8,000원"
              />
              <GroupComponent2
                prop="뚝배기만두닭곰탕"
                prop1="5,500원"
                propPadding="var(--padding-5xl) var(--padding-mid) var(--padding-5xl) var(--padding-xl)"
                propMinWidth="3.375rem"
              />
              <GroupComponent2
                prop="전주식콩나물밥+치즈함박"
                prop1="6,500원"
                propPadding="var(--padding-5xl) var(--padding-xl)"
                propMinWidth="3.438rem"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.planeat2024}>
          PLANEAT © 2024 - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default RestaurantChosen;
