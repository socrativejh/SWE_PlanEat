import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  const onFilterButtonsClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.restaurantWrapper}>
          <div className={styles.restaurant}>
            <div className={styles.restaurantDetails}>
              <div className={styles.restaurantInfo}>
                <div className={styles.restaurantName}>
                  <div className={styles.nameBackground} />
                  <div className={styles.wrapper}>
                    <div className={styles.div}>구시재</div>
                  </div>
                  <div className={styles.newIcon}>
                    <div className={styles.newBackground} />
                    <img
                      className={styles.newIconChild}
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
                    <img
                      className={styles.newIconItem}
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.div1}>
                    <p className={styles.p}>로제소스스파게티</p>
                    <p className={styles.p1}>쌀밥</p>
                    <p className={styles.p2}>브로콜리스프</p>
                    <p className={styles.p3}>돈까스*스프</p>
                    <p className={styles.p4}>치즈시즈닝감자튀김</p>
                    <p className={styles.p5}>오이피클</p>
                    <p className={styles.p6}>배추김치</p>
                  </div>
                  <div className={styles.menuPrice}>
                    <div className={styles.div2}>
                      8,00
                      <span className={styles.span}>0</span>원
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.otherRestaurants}>
                <div className={styles.otherRestaurantList}>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.otherRestaurantIcon}>
                      <div className={styles.otherIconBackground} />
                      <img
                        className={styles.otherRestaurantIconChild}
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className={styles.otherRestaurantIconItem}
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                    <div className={styles.otherRestaurantName}>
                      <div className={styles.div3}>해오름</div>
                    </div>
                  </button>
                  <div className={styles.restaurantOptions}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.div4}>
                        뚝배기만두
                        <span className={styles.span1}>닭</span>곰탕
                      </div>
                      <div className={styles.div5}>
                        5,50
                        <span className={styles.span2}>0</span>원
                      </div>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.div6}>로제치즈돈까스</div>
                      <div className={styles.div7}>
                        6,50
                        <span className={styles.span3}>0</span>원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.div8}>
                <div className={styles.wrapper1}>
                  <img className={styles.icon} alt="" src="/@2x.png" />
                </div>
                <div className={styles.adBackground} />
                <div className={styles.adTitle}>
                  <div className={styles.div9}>행단골</div>
                </div>
                <div className={styles.adIcon}>
                  <div className={styles.adIconBackground} />
                  <img
                    className={styles.adIconChild}
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.adIconItem}
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filtersParent}>
          <div className={styles.toggle}>
            <div className={styles.toggleContentWrapper}>
              <div className={styles.toggleContent}>
                <div className={styles.toggleBackground} />
                <div className={styles.toggleSwitch} />
                <b className={styles.b6}>율</b>
              </div>
            </div>
            <b className={styles.b7}>명</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
