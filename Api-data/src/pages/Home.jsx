import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setUsers(data);
    };
    fetch();
  }, []);
  return (
    <div className="container">
      {users.map((elem) => (
        <div key={elem.id}>
          <Link to={`/user/${elem.id}`}>
            <h4>{elem.name}</h4>
          </Link>
          <p>{elem.email}</p>
          <p>{elem.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
