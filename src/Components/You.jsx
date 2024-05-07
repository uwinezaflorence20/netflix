import React, { useEffect, useState } from "react";
import axios from "axios";

const You = () => {
  const [data, setData] = useState([]);

  const handlFetch = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWU1N2ViYWRjYjdjMWUyNDdjZmZkY2IzMGZlNjU0YyIsInN1YiI6IjY2MzhkOWE1ZTkyZDgzMDEyN2Q0MmQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vSvysTQ91RBv8lNWsgnY0DTnjZcShxyDSIXAvbUKNc",
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

export default You;