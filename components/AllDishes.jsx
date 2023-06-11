import Image from "next/image";
import getFoodData from "@/api/getFoodData";
import DynamiCategory from "./DynamiCategory";

const AllDishes = async ({ isCategory }) => {
  const data = await getFoodData();
  return (
    <div className="mt-16 meals-container">
      {/* <DynamiCategory /> */}
      {data?.meals.map((d) => {
        return (
          <div
            key={d.idMeal}
            className="w-full max-w-[200px] sm:max-w-[192px] h-[226px] relative border-red-700 "
          >
            <Image
              src={d.strMealThumb}
              alt={d.strMeal}
              className="object-contain absolute -top-14 rounded-full left-[28px]"
              width={140}
              height={140}
            />
            <div className="w-full bg-darkBg2 pt-[114px] rounded-xl  px-10 pb-[40px] text-sm text-center">
              <p className="text-white h-[50px] ">{d.strMeal}</p>
              <p className="text-white text-lg ">{d.strCategory}</p>
              <p className="text-white text-lg ">${d.idMeal.slice(-2)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllDishes;
