import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import "./Upcoming.css";

function Upcoming() {
  const coming = useLoaderData();
  console.log(coming.results);

  console.log(coming);

  return (
    <div>
      <Header />
      <h2>Upcoming</h2>

      <ul className="list">
        {coming.results.map((el) => (
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

export default Upcoming;
