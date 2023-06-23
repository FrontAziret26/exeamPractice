import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/thunk";
import { Link } from "react-router-dom";

export const Characters = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {users?.map((el, i) => (
        <div key={i}>
          <img src={el.image} alt="image" />
          <Link to={`${el.id}/detail`}>
            <h1>{el.name}</h1>
          </Link>
          <h3>{el.gender}</h3>
          <h4>{el.status}</h4>
          <h4>{el.species}</h4>
        </div>
      ))}
    </div>
  );
};
