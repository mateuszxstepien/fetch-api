import React from "react";
import "./UserList.css";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.title} />
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <p>{user.email}</p>
    </div>
  ));
  return <div>{users}</div>;
};

export default UsersList;
