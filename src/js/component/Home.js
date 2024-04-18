import React, { useState } from "react";

const Home = () => {
	const [toDos, setToDos] = useState("");
	const [toDoList, setToDoList] = useState([])
	const addNewTask = () => {
		setToDoList([...toDoList, toDos])
	}

	return (
		<div className="m-5 row justify-content-center">
			<div className="col-6">
				<h1 className="text-center pb-3">To Do List</h1>
				<h3 className="fw-lighter pb-3">New Task: {toDos ? toDos : "Add New Task"}</h3>
				<div className="input-group">
					<input type="text" className="form-control mb-3" placeholder="New Task"
						style={{ color: "#e090b9" }}
						onChange={(e) => setToDos(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								addNewTask()
							}
						}}
						aria-label="Username" aria-describedby="basic-addon1 value={toDos}" />
				</div>

				<div>
					<ul className="list-group">
						{toDoList.map((value, index) => {
							return <li className="list-group-item" style={{ color: "#8067d8" }}
								key={index}>
								<div className="task d-flex justify-content-between">
									<span>{value}</span>
									<div>
										<i className="fa-regular fa-trash-can fs-6 ms-auto"
											onClick={() => {
												setToDoList(toDoList.filter((task) => task != value))
											}}></i>
									</div>
								</div>
							</li>
						})}
					</ul><br />
				</div>
				<p className="ms-3">{toDoList.length} Tasks</p>
			</div>
		</div>
	);
};


export default Home;
