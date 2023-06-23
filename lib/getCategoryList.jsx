const getCategoryList = async () => {
  try {
    const getCategoryList = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const categoryListResponse = await getCategoryList.json();
    if (!getCategoryList.ok)
      throw new Error(`Error status: ${categoryListResponse.status}`);
    console.log(categoryListResponse);
    return categoryListResponse;
  } catch (error) {
    console.log(error);
  }
};

export default getCategoryList;
