var React = require('react'),
	TodoContainer = require('./TodoContainer'),
	PageHeader = require('react-bootstrap/lib/PageHeader');

var App = React.createClass({
	render () {
		var styles = {
			header: {
				textAlign: 'center'
			}
		};

		return (
			<div>
				<PageHeader style={styles.header}>Todo App <small>built w/ ReactJS</small></PageHeader>
				<TodoContainer/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));