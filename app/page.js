"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#F4ECE1] to-[#FCFBF7] min-h-screen lg:h-screen lg:overflow-y-hidden px-4 py-8  font-poppins">
      <Nav />
      <main className="mt-20 w-full flex flex-col max-w-7xl mx-auto lg:flex-row gap-6">
        <div>
          <div className="relative max-w-[500px]">
            <h1 className="text-4xl sm:text-5xl lg:hidden font-bold  text-[#2F2F2F]">
              <span className="text-[#FF7E00]">Fast</span> Food Delivery
            </h1>
            <div className="hidden lg:flex items-center gap-3 mt-40">
              <h1 className="text-[#FF7E00] text-9xl font-bold">Fast</h1>
              <div>
                <p className="block text-5xl font-bold text-[#2F2F2F]">Food</p>
                <p className="text-5xl font-bold text-[#2F2F2F]">Delivery</p>
              </div>
            </div>
            <Image
              src="/assets/line.png"
              alt="line"
              className="object-contain hidden md:block  absolute z-0 -top-16 -right-16"
              width={136}
              height={176}
              priority={true}
            />
          </div>
          <p className="text-[#909090] lg:leading-7 text-sm sm:text-base mt-6 lg:text-[20px] max-w-[568px]">
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium
          </p>
          <button
            type="button"
            className=" sm:py-3 lg:text-lg w-full text-sm rounded-full border border-black bg-black py-2  text-white max-w-[150px] hover:bg-transparent mt-12 hover:text-black text-center font-semibold dropShadow"
          >
            Sign In
          </button>
        </div>
        <div>
          <motion.div
            className="container"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 35,
            }}
          >
            <Image
              src="/assets/heroImage.png"
              alt="Hero-Image"
              className="object-contain "
              width={670}
              height={6}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
