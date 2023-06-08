import getFoodCategories from "@/api/getFoodCategories";
export default async function fetchCategories() {
  const foodCategories = await getFoodCategories();
  return foodCategories;
}
