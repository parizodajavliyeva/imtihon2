import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import "./Toprated.css";
function Toprated() {
  const rated = useLoaderData();
  console.log(rated);

  return (
    <div>
      <Header />

      <ul className="list">
        {rated.results.map((el) => (
          <li className="item" key={el.id}>
            <img
              width={300}
              src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
              alt=""
            />
            <div className="div">
              <p className="text">{el.title}</p>
              <p className="text">{el.original_title}</p>

              <p className="text">{el.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Toprated;
