import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("모두보기");
  const [menuItems, setMenuItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const baseUrl = 'http://127.0.0.1:8000/api/v1';

  const filterToMenuId = {
    "고단백": 1,
    "가성비": 2,
    "저칼로리": 3,
    "비건": 4,
    "저당": 5
  };

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`${baseUrl}/campuses/1/restaurants`);
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      } else {
        console.error("Failed to fetch restaurants");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleFilterClick = async (filter) => {
    setSelectedFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
    try {
      let response;
      if (filter === "모두보기") {
        response = await fetch(`${baseUrl}/menus`);
      } else {
        const menuId = filterToMenuId[filter];
        response = await fetch(`${baseUrl}/menus/?menu_id=${menuId}`);
      }

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data);
        setMenuItems(data);
      } else {
        console.error("Failed to fetch menu items");
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    handleFilterClick("모두보기");
    fetchRestaurants(); // Fetch restaurants data once when the component mounts
  }, []); // 빈 배열을 의존성 배열로 사용하여 컴포넌트가 처음 마운트될 때 한 번 실행

  const filters = ["모두보기", "고단백", "가성비", "저칼로리", "비건", "저당"];

  const getRestaurantNameByMenuId = (menuId) => {
    for (const restaurant of restaurants) {
      if (restaurant.menu_ids.includes(menuId)) {
        return restaurant.name;
      }
    }
    return "Unknown Restaurant";
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.filterOptions}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButtons} ${selectedFilter === filter ? styles.selected : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              <b>{filter}</b>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <button key={item.id} className={styles.menuItem} onClick={() => console.log(item)}>
            <div className={styles.menuContent}>
              <div className={styles.restaurantName}>{getRestaurantNameByMenuId(item.id)}</div>
              <div className={styles.menuName}>{item.name}</div>
              <div className={styles.menuPrice}>{item.price.toLocaleString()}원</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  onFilterChange: PropTypes.func,
};

export default FrameComponent;
