import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList />
				<TodoForm />
			</div>
		)
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					title: "Shopping",
					details: "Milk",
				}, {
					title: "Hair cut",
					details: "13:00",
				}, {
					title: "Learn React",
					details: "15:00",
				}
			]
		}
	}
	render() {
		return (
			<div className="todoList">
				<table style={{border: "2px solid black"}}>
					<tbody>
						{this.state.todos.map(({title, details, checked}, index) => {
							return (
								<Todo
									key={index}
									title={title}
									checked={checked}
									handleChange={() => {
										this.setState({checked: !checked});
									}}
								>
									{details}
								</Todo>
							)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const Todo = (props) => {
	return (
		<tr>
			<td style={{border: "1px solid black"}}>
				<input type="checkbox" checked={props.checked} onChange={props.handleChange.bind(this)}/>
			</td>
			<td style={{border:"1px solid black"}}>
				{props.title}
			</td>
			<td style={{border:"1px solid black"}}>
				{props.children}
			</td>
		</tr>
	);
}
Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoForm">
				I am a TodoForm.
			</div>
		);
	}
}
