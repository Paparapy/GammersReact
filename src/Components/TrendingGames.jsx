import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
    },[])
  return (
   <div className='hidden mt-5 md:block'>
    <h2 className='text-[30px] font-bold dark:text-gray-300'>Trending Games</h2>
     <div className='gap-4 mt-5 md:grid-cols-3 md:grid lg:grid-cols-4 '>
      {gameList.map((item,index)=>index<4&&(
        <div className='dark:bg-gray-600 h-[400px] rounded-lg bg-black group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer md:h-[350px] dark:text-white'>
          <img src={item.background_image} className='h-[270px] object-cover rounded-t-lg'/>
          <h2 className='rounded-lg p-2 text-white
           text-[20px] font-bold md:text-[15px]'>{item.name}</h2>
        </div>
      ))}
    </div>
   </div>
  )
}

export default TrendingGames