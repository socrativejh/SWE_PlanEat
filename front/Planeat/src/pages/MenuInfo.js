import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Information from "../components/Information";
import styles from "./MenuInfo.module.css";

const MenuInfo = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onUserIconClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <div className={styles.menuInfo}>
      <Header
        user1="/user.svg"
        onLogoContainerClick={onLogoContainerClick}
        onUserIconClick={onUserIconClick}
      />
      <main className={styles.content}>
        <section className={styles.restaurantInfo}>
          <div className={styles.restaurantDetails}>
            <div className={styles.restaurantNameTime}>
              <div className={styles.restaurantName}>
                <h3 className={styles.h3}>행단골 - 봄이 온 소반</h3>
                <div className={styles.mealTime}>
                  <div className={styles.div}>5월 9일(목) 중식</div>
                </div>
              </div>
              <div className={styles.foodCategories}>
                <div className={styles.category}>
                  <div className={styles.categoryList}>
                    <b className={styles.b}>고단백</b>
                  </div>
                  <div className={styles.categoryList1}>
                    <b className={styles.b1}>비건</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Information />
        </section>
      </main>
    </div>
  );
};

export default MenuInfo;
