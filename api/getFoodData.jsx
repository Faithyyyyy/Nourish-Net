// import setupAnalyticsService from "../l";
const getFoodData = async () => {
  console.log("api key", process.env.NEXT_PUBLIC_API_KEY);
  console.log("api id", process.env.NEXT_PUBLIC_API_ID);
  const res = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.NEXT_PUBLIC_API_ID}&app_key=${process.env.NEXT_PUBLIC_API_KEY}&nutrition-type=cooking&category=fast-foods`
  );
  if (!res.ok) {
    console.log("kiloshele");
  }
  const response = res.json();
  //   response.then((data) => console.log(data));
  //   return res.json();
};

export default getFoodData;