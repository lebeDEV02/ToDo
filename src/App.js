import './App.css';
import { useState } from "react";
import Form from "./Components/form"
import ToDoList from "./Components/ToDoList"
function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className="App">
			<header>
				<h1>ToDo List :D</h1>
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
