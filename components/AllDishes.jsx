import Image from "next/image";
const AllDishes = () => {
  return (
    <div className="mt-16">
      <div className="w-full max-w-[200px] relative">
        <Image
          src="/assets/exampleFood.png"
          alt="Food Image"
          className="object-contain absolute -top-10 left-8"
          width={136}
          height={176}
        />
        <div className="w-full bg-darkBg2 pt-[114px] px-10 pb-[48px] text-sm text-center">
          <p className="text-white  ">Spicy seasoned seafood noodles</p>
          <p className="text-white mt-2 font-thin">$ 1.29</p>
        </div>
      </div>
    </div>
  );
};

export default AllDishes;
