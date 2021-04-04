import './App.css';
import { useState, useEffect } from "react";
import Form from "./Components/form"
import ToDoList from "./Components/ToDoList"
function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const setLocalTasks = () => {
		localStorage.setItem("tasks", JSON.stringify(todos));
	}
	const getLocalTasks = () => {
		if (localStorage.getItem("tasks") === null) {
			localStorage.setItem("tasks", JSON.stringify([]));
		} else {
			let tasks = JSON.parse(localStorage.getItem("tasks"));
			setTodos(tasks);
		}
	}
	useEffect(() => {
		getLocalTasks();
	}, []);

	useEffect(() => {
		setLocalTasks()
	}, [todos]);
	return (
		<div className="App">
			<header>
				<h1>What will we do today?</h1>
			</header>
			<div className="todo">
				<div className="todo__container">
					<Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}></Form>
					<ToDoList todos={todos} setTodos={setTodos}></ToDoList>
				</div>
			</div>
		</div>
	);
}

export default App;
