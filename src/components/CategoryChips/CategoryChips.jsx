import {React, useState} from "react";
import "./categoryChips.css";
import { useCategoryContext } from "../../context/category-context";
import { useVideoListing } from "../../context/video-listing-context";

function CategoryChips() {
  const { category } = useCategoryContext();
  const { videoList, selectedCategory, setSelectedCategory } = useVideoListing();
  const [clas, setClas] = useState(false)

  // {`chips ${clas ? "active":""}`}
  return (
    <div className="category-chips-container">
      <div className="chips" onClick={()=>setSelectedCategory("All")}>All</div>
      {category.map((category) => (
        <div
          className="chips"
          key={category._id}
          onClick={() => {setSelectedCategory
          (category.categoryName)
          setClas(!clas)
          }}
        >
          {category.categoryName}
        </div>
      ))}
    </div>
  );
}

export default CategoryChips;
