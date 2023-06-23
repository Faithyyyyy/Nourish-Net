// const useCategories = async ({ url }) => {
//   try {
//     const getCategory = await fetch(url);
//     const categoryResponse = await getCategory.json();
//     if (!getCategory.ok)
//       throw new Error(`Error status: ${categoryResponse.status}`);
//     return categoryResponse;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default useCategories;
"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

function useCategories() {
  const { queriedMeal } = useSelector((store) => {
    return store.meals;
  });
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const categories = async () => {
    try {
      setLoading(true);
      const getCategory = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
      );
      const categoryResponse = await getCategory.json();
      if (!getCategory.ok)
        throw new Error(`Error status: ${categoryResponse.status}`);
      setLoading(false);
      console.log(categoryResponse);
      setCategory(categoryResponse.meals);
      return categoryResponse;
    } catch (error) {
      console.log(error);
    }
  };

  categories();
  return { loading, category };
}
export default useCategories;
