var React = require('react'),
	ListGroup = require('react-bootstrap/lib/ListGroup'),
	TodoItem = require('./TodoItem');

var TodoList = React.createClass({
	render () {
		var list = this.props.items.map((item, i) => {
			return <TodoItem key={i} text={item.text} delete={this.props.remove.bind(null, i)} />
		});

		return (
			<ListGroup>
				{list}
			</ListGroup>
		);
	}
});

module.exports = TodoList;