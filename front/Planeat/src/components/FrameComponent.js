import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ onFilterChange, campus }) => {
  const [selectedFilter, setSelectedFilter] = useState("모두보기");
  const [menuItems, setMenuItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [campusId, setCampusId] = useState(campus === "명" ? 1 : 2);
  const navigate = useNavigate();

  const baseUrl = "http://127.0.0.1:8000/api/v1";

  const filterToTagId = {
    고단백: 2,
    가성비: 1,
    저칼로리: 3,
    비건: 4,
  };

  useEffect(() => {
    setCampusId(campus === "명" ? 1 : 2);
  }, [campus]);

  useEffect(() => {
    fetchRestaurants(campusId); // Fetch restaurants data for the initial campus
    handleFilterClick(selectedFilter); // Fetch data for the currently selected filter
  }, [campusId]); // Re-fetch restaurants if campusId changes

  const fetchRestaurants = async (campus_id) => {
    try {
      const response = await fetch(
        `${baseUrl}/campuses/${campus_id}/restaurants`
      );
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

  const fetchMenuByTag = async (tagId) => {
    try {
      const response = await fetch(
        `${baseUrl}/menus/search_by_tags/?tags=${tagId}`
      );
      if (response.ok) {
        const menuIds = await response.json();
        const menuPromises = menuIds.map((menuId) => fetchMenuById(menuId));
        const menuData = await Promise.all(menuPromises);
        return menuData.filter((item) => item !== null);
      } else {
        console.error("Failed to fetch tag items");
      }
    } catch (error) {
      console.error("Error fetching tag items:", error);
    }
    return [];
  };

  const fetchMenuById = async (menuId) => {
    try {
      const response = await fetch(`${baseUrl}/menus/${menuId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Failed to fetch menu item with ID:", menuId);
      }
    } catch (error) {
      console.error("Error fetching menu item with ID:", menuId, error);
    }
    return null;
  };

  const handleFilterClick = async (filter) => {
    setSelectedFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
    try {
      if (filter === "모두보기") {
        const response = await fetch(`${baseUrl}/menus`);
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setMenuItems(data);
        } else {
          console.error("Failed to fetch menu items");
        }
      } else {
        const tagId = filterToTagId[filter];
        const menuData = await fetchMenuByTag(tagId);
        console.log("Fetched tag data:", menuData);
        setMenuItems(menuData);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const filters = ["모두보기", "고단백", "가성비", "저칼로리", "비건"];

  const getRestaurantNameByMenuId = (menuId) => {
    for (const restaurant of restaurants) {
      if (restaurant.menu_ids.includes(menuId)) {
        return restaurant.name;
      }
    }
    return "Unknown Restaurant";
  };

  const redirectToPage1 = () => {
    navigate("/menu-info/1");
  };

  const redirectToPage2 = () => {
    navigate("/menu-info/2");
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.filterOptions}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButtons} ${
                selectedFilter === filter ? styles.selected : ""
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              <b>{filter}</b>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.menuList}>
        {menuItems.map((item) => {
          const restaurantName = getRestaurantNameByMenuId(item.id);
          if (restaurantName === "Unknown Restaurant") {
            return null; // Unknown Restaurant인 경우 렌더링하지 않음
          }
          const handleClick = () => {
            if (restaurantName === "패컬티식당") {
              redirectToPage1();
            } else if (restaurantName === "행단골") {
              redirectToPage2();
            } else {
              redirectToPage2();
            }
          };
          return (
            <button
              key={item.id}
              className={styles.menuItem}
              onClick={handleClick}
            >
              <div className={styles.menuContent}>
                <div className={styles.restaurantName}>{restaurantName}</div>
                <div className={styles.menuName}>
                  {item.name.split("|").map((part, index) => (
                    <span key={index}>
                      {part}
                      <br />
                    </span>
                  ))}
                </div>
                <div className={styles.menuPrice}>
                  {item.price.toLocaleString()}원
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  onFilterChange: PropTypes.func,
  campus: PropTypes.string.isRequired,
};

export default FrameComponent;
