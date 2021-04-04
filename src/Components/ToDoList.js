import React from 'react';
import Todo from "./Todo"
function ToDoList({ todos, setTodos }) {
	return (
		<div className="todo__bottom">
			<ul className="todo__list">
				{todos.map((todo) => {
					return <Todo task={todo.task} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} completed={todo.completed}></Todo>
				})}
			</ul>
		</div>
	);
}
export default ToDoList;