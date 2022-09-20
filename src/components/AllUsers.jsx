import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function AllUsers({ userData, handleDelete, editUser }) {
  const { users } = useSelector((store) => store);

 
  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return (
            <User
              key={index}
              userBio={user}
              handleDelete={handleDelete}
              editUser={editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllUsers;