import React from "react";
import ToDoList from "./ToDoList";


const Todo = ({ task, todo, todos, setTodos, completed }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};
	const doneHandler = () => {
		{
			setTodos(
				todos.map((item) => {
					if (item.id === todo.id) {
						return {
							...item,
							completed: !completed
						}
					}
					return item;
				})
			)
		}
	}
	return (
		< li className="todo__item" >
			<p className="todo__item-text">{task}</p>
			<button onClick={doneHandler} className="todo__item-done"></button>
			<button onClick={deleteHandler} className="todo__item-delete"></button>
		</li >
	)
}

export default Todo;