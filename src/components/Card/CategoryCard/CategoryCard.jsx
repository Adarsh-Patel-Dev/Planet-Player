import React from 'react'
import "./categoryCard.css"

function CategoryCard() {
  return (
    <div className='category-container'>
      <div className='category-img'>
        {/* <img src={category.image}/> */}
        <img src="https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png"/>
      </div>
      <div className='category-name'>category.categoryName</div>
      <div className='category-description'>category.description</div>
    </div>
  )
}

export { CategoryCard }