import React, { useEffect, useState } from "react";
import axios from "axios";

const Tvshow = () => {
  const [data, setData] = useState([]);

  const handlFetch = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODI5M2U0Y2RjYWFkNzUzOTNlNTRjZmY0NGM3YTk4MSIsInN1YiI6IjY2MzhkYTExNjY1NjVhMDEyODE2OTdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RZ8ZbwazdJEcZxkrZZoLXkVKg2tn6Mo8K-EDwbWgNb4",
      },
    })
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlFetch();
  }, []);

  return (
    <>
    
      <div className="flex flex-wrap mx-16 gap-4 bg-black justify-center">
        
        {data && data.map((item) => (
          <div key={item.id} className="bg-black p-4 mb-8 " style={{ width: '200px' }}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-full h-60 mb-4" />
            <div className="ml-4">
              <h3 className="text-lg text-white font-bold mb-2">{item.title}</h3>
              <p className=" text-white mb-2">Release Date: {item.release_date}</p>
              <p className=" text-white">Vote Average: {item.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tvshow;

