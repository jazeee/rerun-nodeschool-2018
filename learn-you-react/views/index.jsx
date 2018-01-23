import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList data={this.props.data}/>
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
					detail: "Milk",
				}, {
					title: "Hair cut",
					detail: "13:00",
				}, {
					title: "Learn React",
					detail: "15:00",
				}
			]
		}
	}
	render() {
		const {data = []} = this.props;
		return (
			<div className="todoList">
				<table style={style.table}>
					<tbody>
						{data.map(({title, detail, checked}, index) => {
							return (
								<Todo
									key={index}
									title={title}
									checked={checked}
									handleChange={() => {
										this.setState({checked: !checked});
									}}
								>
									{detail}
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
			<td style={style.tableContent}>
				<input type="checkbox" checked={props.checked} onChange={props.handleChange.bind(this)}/>
			</td>
			<td style={style.tableContent}>
				{props.title}
			</td>
			<td style={style.tableContent}>
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
let style = {
	table: {
		border: "2px solid black",
	},
	tableContent: {
		border: "1px solid black",
	},
};
