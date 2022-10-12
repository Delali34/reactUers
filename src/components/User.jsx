
import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../action/UserAction";
import { doc, deleteDoc } from "firebase/firestore"; 
import { db } from "../firebase/config";

function User({ handleDelete, userBio, editUser }) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const dispatch = useDispatch();


	const deleteUser = async() => {
		try {
			await deleteDoc(doc(db, "users", userBio.id));
		  } catch (error) {
			console.log(error);
		  }
		};
	// e.preventDefault();
	// 	// handleDelete(userInfo.id);
	// 	// delete userInfo.id;
	// 	dispatch(DeleteUser(userBio.id)); 
	//   };

	
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<EditUserForm
            hide={handleClose}
            userBio={userBio}
            editUser={editUser}
          />
				</Modal.Body>
			</Modal>
			<Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name:{userBio.name}</Card.Title>
						<Card.Subtitle className="mb-2 ">
							Phone Number:{userBio.number}
						</Card.Subtitle>
						<Card.Text>location:{userBio.location}</Card.Text>
						<Button href="#" size="sm" variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button href="#" size="sm" variant="danger" onClick={deleteUser}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default User;