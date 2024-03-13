"use client";
import { filtersCategorys } from "@/shared/var/categorys";
import clsx from "clsx";
import React, { FC } from "react";
import styles from "./Category.module.scss";

interface CategoryProps {
  selectedCategory: number;
  setSelectedCategory: (selectedCategory: number) => void;
}

const Category: FC<CategoryProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.categorys, "max-475px:max-w-[calc(100%-20px)]")}>
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
