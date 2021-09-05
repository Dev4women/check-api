import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      //const persons = res.data;
      setUser(res.data);
    });
  }, []);
  console.log(user);

  return (
    <div>
      <ListGroup>
        {user.map((el) => (
          <ListGroupItem>{el.name}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;