// import setupAnalyticsService from "../l";
const getFoodData = async () => {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    );

    const response = await res.json();
    if (!res.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.log("error");
  }
};

export default getFoodData;
