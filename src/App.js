import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = (user) => {
    user.id = Math.random();
    setUsers([...users, user]);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddUserForm newUser={addNewUser} />
        </Col>
        <Col>
          <AllUsers
            userData={users}
            handleDelete={handleDelete}
            editUser={editUser}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;