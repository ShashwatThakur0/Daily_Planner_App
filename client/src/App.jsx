import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";
import Iphone15ProDemo from "./components/Iphone15ProDemo";

const App = () => {
	const [toDos, setToDos] = useState([]);
	const [input, setInput] = useState("");
	const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); // default to todays date
	const [updateUI, setUpdateUI] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupContent, setPopupContent] = useState({});

	useEffect(() => {
		axios
			.get(`${baseURL}/get`, { params: { date } })
			.then((res) => setToDos(res.data))
			.catch((err) => console.log(err));
	}, [updateUI, date]);

	const saveToDo = () => {
		axios
			.post(`${baseURL}/save`, { toDo: input })
			.then((res) => {
				console.log(res.data);
				setUpdateUI((prevState) => !prevState);
				setInput("");
			})
			.catch((err) => console.log(err));
	};

	return (
		<Iphone15ProDemo>
			<main>
				<div className="container">
					<h1 className="title">To-Do App</h1>

					<div className="input_holder">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
							placeholder="Add a ToDo..."
						/>
						<button onClick={saveToDo}>Add</button>
					</div>

					<div className="date_picker">
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>

					<div className="list">
						{toDos.map((el) => (
							<ToDo
								key={el._id}
								text={el.toDo}
								id={el._id}
								setUpdateUI={setUpdateUI}
								setShowPopup={setShowPopup}
								setPopupContent={setPopupContent}
							/>
						))}
					</div>
				</div>
				{showPopup && (
					<Popup
						setShowPopup={setShowPopup}
						popupContent={popupContent}
						setUpdateUI={setUpdateUI}
					/>
				)}
			</main>
		</Iphone15ProDemo>
	);
};

export default App;
