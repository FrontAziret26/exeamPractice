import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../store/thunk";

export const Location = () => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.users);
  
  useEffect(() => {
    dispatch(getLocation());
  }, []);

  return (
    <div>
      {location?.map((el, i) => (
        <div key={i}>
          <h2>{el.name}</h2>
          <h3>{el.type}</h3>
          <h4>{el.dimension}</h4>
        </div>
      ))}
    </div>
  );
};
