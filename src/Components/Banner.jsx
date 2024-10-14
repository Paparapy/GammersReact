import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-slate-900 to-transparent">

        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>

        <button className="border-[1px] py-1 bg-gray-500 rounded-full text-white dark:text-white hover:bg-gray-300 hover:text-black transition-all dark:hover:text-black duration-300 ease-out px-4">
          Get Now
        </button>

      </div>

      <img
        src={gameBanner.background_image}
        className="md:h-[350px] lg:h-[500px] w-full object-cover rounded-lg"
      />

    </div>
  );
}

export default Banner;
