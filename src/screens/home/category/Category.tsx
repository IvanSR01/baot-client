"use client";
import { filtersCategorys } from "@/shared/var/categorys";
import clsx from "clsx";
import React, { useState } from "react";
import styles from "./Category.module.scss";
const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.categorys}>
        {filtersCategorys.map((item, i) => (
          <div
            className={clsx(
              styles.item,
              i === selectedCategory && styles.active
            )}
            onClick={() => setSelectedCategory(i)}
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
