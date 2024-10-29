import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import "./Popular.css";
function Popular() {
  const popular = useLoaderData();

  return (
    <div>
      <Header />

      <ul className="list">
        {popular.results.map((el) => (
          <li className="item" key={el.id}>
            <img
              width={300}
              src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
              alt=""
            />
            <div>
            <p>{el.title}</p>
            <p>{el.original_title}</p>
            <p>{el.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Popular;
