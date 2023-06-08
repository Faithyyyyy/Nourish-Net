const getFoodCategories = async () => {
  try {
    const getCategory = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categoryResponse = await getCategory.json();
    if (!getCategory.ok)
      throw new Error(`Error status: ${categoryResponse.status}`);
    return categoryResponse;
  } catch (error) {
    console.log(error);
  }
};
export default getFoodCategories;
