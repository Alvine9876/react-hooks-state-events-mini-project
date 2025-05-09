import React from "react";


function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : null}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
