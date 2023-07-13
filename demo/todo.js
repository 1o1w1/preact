import { createElement, Component } from 'preact';

let counter = 0;

export default class TodoList extends Component {
	state = {
		todos: [
			{
				text: '0',
				id: 0
			},
			{
				text: '1',
				id: 1
			},
			{
				text: '2',
				id: 2
			},
			{
				text: '3',
				id: 3
			}
		],
		text: ''
	};

	setText = e => {
		this.setState({ text: e.target.value });
	};

	addTodo = () => {
		let { todos, text } = this.state;
		todos = todos.concat({ text, id: ++counter });
		this.setState({ todos, text: '' });
	};

	removeTodo = e => {
		let id = e.target.getAttribute('data-id');
		this.setState({ todos: this.state.todos.filter(t => t.id != id) });
	};

	changeIndex = (item, targetIndex) => {
		let { todos } = this.state;
		todos = todos.filter(t => t.id != item.id);
		todos.splice(targetIndex, 0, item);
		console.log(todos);
		this.setState({ todos });
	};

	render({}, { todos, text }) {
		return (
			<form onSubmit={this.addTodo} action="javascript:">
				<input value={text} onInput={this.setText} />
				<button type="submit">Add</button>
				<ul>
					<TodoItems
						key={'TodoItems'}
						todos={todos}
						removeTodo={this.removeTodo}
						changeIndex={this.changeIndex}
					/>
				</ul>
			</form>
		);
	}
}

class TodoItems extends Component {
	render({ todos, removeTodo, changeIndex }) {
		return todos.map((todo, index) => (
			<li key={todo.id}>
				<input
					value={index}
					onInput={evt => changeIndex(todo, evt.target.value)}
				/>
				<button type="button" onClick={removeTodo} data-id={todo.id}>
					&times;
				</button>
				{todo.text}
			</li>
		));
	}
}
