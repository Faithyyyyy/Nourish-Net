"use client";
import Sidebar from "@/components/Sidebar";
import PaymentSidebar from "@/components/PaymentSidebar";
import AllDishes from "../../components/AllDishes";
import {
  setQueriedMeal,
  setIsCategory,
} from "../GlobalRedux/Features/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectCategory from "@/components/SelectCategory";

export default function Home() {
  const { queriedMeal } = useSelector((store) => {
    return store.meals;
  });
  const dispatch = useDispatch();
  let isCategory = false;
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setQueriedMeal(e.target.value));
    isCategory = true;
    console.log(isCategory);
  };
  return (
    <div>
      <Sidebar />
      <section className="bg-darkBg1 lg:ml-[184px]  px-6 pt-6 h-[20000px] font-barlow">
        <div className="flex justify-between items-center">
          <div className="text-white ">
            <h2 className="font-barlow font-semibold text-2xl">Jaegar Resto</h2>
            <p className="font-thin">Tuesday, 2 Feb 2021</p>
          </div>
          {/* <div className="relative hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-white absolute top-4 left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              className="bg-[#2D303E] border border-[#393C49] pl-10 rounded-md w-[250px] h-[48px] text-white font-barlow outline-none"
              placeholder="Search for food, coffe, etc.."
            />
          </div> */}
        </div>
        {/* CHOOSE DISHES SECTIONS */}
        <div className=" mt-10 ">
          <div className="flex justify-between mb-24">
            <h3 className="text-white">Choose Dishes</h3>
            <div>
              <SelectCategory handleChange={handleChange} />
            </div>
          </div>
          <AllDishes isCategory={isCategory} handleChange={handleChange} />
        </div>
      </section>
      {/* <PaymentSidebar /> */}
    </div>
  );
}
