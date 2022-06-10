import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
async function getCategory() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/categories",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setCategory(response.data.categories);
        console.log("from category",response.data.categories)
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  useEffect(() => {
    getCategory(); 
  }, [])
  

  return (
    <CategoryContext.Provider
      value={{
       getCategory, category
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export { useCategoryContext, CategoryProvider}