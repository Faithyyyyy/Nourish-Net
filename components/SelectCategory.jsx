import getFoodCategories from "@/api/getFoodCategories";
async function SelectCategory({ handleChange }) {
  const foodCategories = await getFoodCategories();

  return (
    <select
      name="Filter by category"
      id="category"
      className="bg-darkBg2 text-white outline-none focus:outline-none p-4 rounded select1"
      onChange={(e) => handleChange(e)}
    >
      <option value="filter">Filter by category</option>
      {foodCategories?.categories.map((category) => {
        return (
          <option value={category.strCategory} key={category.idCategory}>
            {category.strCategory}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCategory;
