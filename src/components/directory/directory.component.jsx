import "./directory.styles.scss";
import React from 'react'
import CategoryItem from "../category-item/category-item.component";


const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryItem category={category} key={category.id}/>
      ))}
    </div>
  )
}

export default Directory