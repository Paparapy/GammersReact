import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({genereId,selectedGenresName}) {
  const [genreList,setGenreList] = useState([]);
  const [activeIndex,setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);


  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="min-h-[100vh]">
      <h2 className="text-[30px] font-bold dark:text-white">Types du jeux</h2>
      {genreList.map((item,index) => (
        <div 
        onClick={()=>{setActiveIndex(index);genereId(item.id);selectedGenresName(item.name)}}
        className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2  rounded-lg mr-1 dark:hover:text-black dark:hover:bg-gray-600 group transition-all ease-out duration-300 ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
          <img
            src={item.image_background}
            className={`w-[60px] h-[60px] object-cover rounded-lg group-hover:scale-105 ${activeIndex==index?"scale-105":null}`}
          />
          <h3 className={`dark:text-white group-hover:font-bold transition-all ease-in-outout duration-300 ${activeIndex==index?"font-bold":null}`}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
