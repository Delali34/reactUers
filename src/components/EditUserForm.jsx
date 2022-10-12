import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UserEdit } from "../action/UserAction";
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config'
function EditUserForm(props) {
	const [name, setName] = useState(props.userBio.name);
	const [number, setNumber] = useState(props.userBio.number);
	const [location, setLocation] = useState(props.userBio.location);
	const [id, setId] = useState(props.userBio.id);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		let userInfo = {
		  name,
		  number,
		  location,
		  id,
		};
		try {
		  const docRef = doc(db, "users", userInfo.id);
		  await updateDoc(docRef, userInfo);
		} catch (error) {
		  console.log(error);
		}
	
		setName("");
		setNumber("");
		setLocation("");
		setId("");
		props.close();
	  };
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter number"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Location</Form.Label>
					<Form.Control
						type="text"
						placeholder="location"
						value={location}
						onChange={(e) => {
							setLocation(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default EditUserForm;