import React from "react";
import { useParams } from "react-router-dom";
import styles from "./MenuInfo.module.css";
import image1 from "../image/menu_detail_page.png";
import image2 from "../image/menu_detail_page_2.png";

const MenuInfo = () => {
  const { id } = useParams();
  let imageUrl;

  switch (id) {
    case "1":
      imageUrl = image1;
      break;
    case "2":
      imageUrl = image2;
      break;
    default:
      imageUrl = image1;
  }

  return (
    <div className={styles.MenuInfo}>
      {imageUrl ? (
        <img src={imageUrl} alt="MenuInfo" className={styles.fullscreenImage} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MenuInfo;
