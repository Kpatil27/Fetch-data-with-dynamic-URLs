import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const { id } = useParams();

  const [user, SetUser] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      SetUser(data);
    };
    fetch();
  }, []);
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p>{user.body}</p>
      <br />
    </div>
  );
};

export default Users;
