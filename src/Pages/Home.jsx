import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GameByGenresId from "../Components/GameByGenresId";


function Home() {

  const [allGameList,setAllGamelist]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);



  useEffect(() => {
    getAllGameList();
    getGameListByGenresId(4);
  }, []);

  const getAllGameList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamelist(resp.data.results)
      setGameListByGenres(resp.data.results)
    });
  };

  const getGameListByGenresId=(id) => {
    console.log("GRENIED",id)
    GlobalApi.getGameListByGenreId(4).then((resp)=>{
      setGameListByGenres(resp.data.results)
      console.log("Game list genre:",resp.data.results)
    }) 
  }

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
      <GenreList 
          genereId={(genereId)=>getGameListByGenresId(genereId)}
          // selectedGenresName={(name)=>setSelctedGenresName(name)}
           />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length>0&&gameListByGenres.length>0?
        <div>
          <Banner gameBanner={allGameList[0]}/>
          <TrendingGames gameList={allGameList}/>
          <GameByGenresId gameList={gameListByGenres}/>
        </div>
      :null}
      </div>
    </div>
  )
}

export default Home;
