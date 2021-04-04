import React from "react";

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
			<p className={`todo__item-text ${todo.completed ? "todo__item-text--completed" : ""}`}>{task}</p>
			<button onClick={doneHandler} className="todo__item-done">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" /></svg>
			</button>
			<button onClick={deleteHandler} className="todo__item-delete">
				<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
			</button>
		</li >
	)
}

export default Todo;