var React = require('react'),
	TodoAdd = require('./TodoAdd'),
	TodoList = require('./TodoList');

var TodoContainer = React.createClass({
	getInitialState () {
		return {
			items: []
		}
	},

	handleAddItem (item) {
		this.setState({
			items: this.state.items.concat([item])
		});
	},

	handleRemoveItem (i) {
		var newItems = this.state.items;
		newItems.splice(i, 1);
		this.setState({
			items: newItems
		});
	},

	render () {
		var styles = {
			container: {
				width: '500px',
				margin: '0 auto'
			}
		};

		return (
			<div style={styles.container}>
				<TodoAdd add={this.handleAddItem}/>
				<TodoList items={this.state.items} remove={this.handleRemoveItem}/>
			</div>
		);
	}
});

module.exports = TodoContainer;