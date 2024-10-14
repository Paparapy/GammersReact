import React, { useEffect } from "react";

function GameByGenresId({gameList,selectedGenresName}) {
  useEffect(() => {
   
  },[]);

  return (
    <div className="py-6">
      <h2 className="text-[30px] font-bold dark:text-gray-300">
        {selectedGenresName}Popular Games
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {gameList.map((item) => (
          <div className="dark:bg-gray-600 p-3 h-full rounded-lg bg-black group hover:scale-110 transition-all duration-400 ease-in-out cursor-pointer md:h-[350px] mt-5 pb-10 ">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[20px] text-white">
              {item.name}
              <span
                className="p-1 rounded-sm ml-2 text-[10px]
                 bg-green-100 text-green-700 font-medium"
              >
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating}  💬{item.reviews_count}
                  🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameByGenresId;
