import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";


export const CharacterDetail = () => {
  const { users } = useSelector((state) => state.users);
  const { id } = useParams();
  const result = users.filter((el) => el.id === +id);
  console.log(result);

  const episodeLength = result[0]?.episode.length;

  return (
    <div>
      {result?.map((el, i) => (
        <div key={i}>
          <img src={el.image} alt="" />
        </div>
      ))}
      <p>Episode : {episodeLength}</p>
    </div>
  );
};
