import React, { useEffect, useState } from "react";
import TMDB from "./TMDB";
import movieRow from "./Components/movieRow";

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() =>{
    const loadAll = async () => {
      //pega a lista total
      let list = await TMDB.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <movieRow />

        ))}
      </section>
    </div>
  )
  }