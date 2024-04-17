import React, { useState } from "react";

const Home = () => {
	const [toDos, setToDos] = useState("");
	const [toDoList, setToDoList] = useState([])

	return (
		<div className="m-5 row justify-content-center">
			<div className="col-6">
				<h1 className="text-center pb-3">To Do List</h1>
				<h3 className="fw-lighter pb-3">New Task: {toDos ? toDos : "Add New Task"}</h3>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="New Task"
						style={{ color: "#e090b9" }}
						onChange={(e) => setToDos(e.target.value)}
						aria-label="Username" aria-describedby="basic-addon1 value={toDos}" />
				</div>
				<div>

				</div>
			</div>
		</div>
	);
};


export default Home;
