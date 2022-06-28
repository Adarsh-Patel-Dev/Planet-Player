import React from 'react'
import "./categoryChips.css"
import { useCategoryContext } from "../../context/category-context"
import{ useVideoListing } from "../../context/video-listing-context"


function CategoryChips() {
    const { category } = useCategoryContext();
    const { videoList } = useVideoListing();


    function filterVideoByCategory(category){
        console.log("clicked");
        console.log (videoList.filter(video=>video.category === category))
    }
    
  return (
    <div className='category-chips-container'>
    <div className='chips'>All</div>
   { category.map(category=>(

    <div className='chips' key={category._id} onClick={()=>filterVideoByCategory(category.categoryName)}>
     {category.categoryName}
    </div>
   ))}
     <hr/>
    </div>
  )
}

export default CategoryChips