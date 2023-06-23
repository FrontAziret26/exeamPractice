import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../store/thunk";

export const Episode = () => {
  const { episodes } = useSelector((state) => state.users);
  console.log(episodes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEpisodes());
  }, []);
  return (
    <div>
      {episodes?.map((el, i) => (
        <div key={i}>
          <h2>{el.name}</h2>
          <h3>{el.air_date}</h3>
          <h4>{el.episode}</h4>
        </div>
      ))}
    </div>
  );
};
