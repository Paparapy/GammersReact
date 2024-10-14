import axios from "axios";

const key = "c3850bbd832847abaa2a71078908d6f5";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId
};
