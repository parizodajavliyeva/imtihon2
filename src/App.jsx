import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home"
import Upcoming from "./components/Upcoming/Upcoming";
import Toprated from "./components/Toprated/Toprated"
import Popular from "./components/Popular/Popular"
import Header from "./components/Header/Header"

let API_KEY = "17f1ceadcf3767a35e55dd6204800668"
const getUpcoming = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
const getRated = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
const getPopular = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
const getBooks = async ()=>{
  let response = await fetch(`https://image.tmdb.org/t/p/original${item.poster_path}`)
  let data = await response.json()
  setData(data)
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/header",
    element: <Header />,

  },
  {
    path:"/popular",
    element:<Popular/>,
    loader:getPopular
  },
  {
    path:"/toprated",
    element:<Toprated/>,
    loader:getRated
  },
  {
    path:"/upcoming",
    element:<Upcoming/>,
    loader:getUpcoming
  },
]);


function App() {
  return <> 
  <RouterProvider router={router} />
  
  </>;
}

export default App;
