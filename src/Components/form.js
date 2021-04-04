import React from "react";


function Form({ setInputText, setTodos, todos, inputText }) {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (inputText !== "") {
			setTodos([...todos, { task: inputText, id: todos.length, completed: false }]);
			setInputText("");
		}
	}
	return (
		<form className="todo__top">
			<input value={inputText} onChange={inputTextHandler} className="todo__input"></input>
			<button onClick={submitHandler} className="todo__button" type="submit">Add task</button>
		</form>
	);
}
export default Form;