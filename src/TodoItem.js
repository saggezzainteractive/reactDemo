var React = require('react'),
	Button = require('react-bootstrap/lib/Button'),
	ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var TodoItem = React.createClass({
	render () {
		var styles = {
			listItem: {
				overflow: 'auto'
			},
			right: {
				float: 'right'
			}
		};

		return (
			<div>
				<ListGroupItem style={styles.listItem}>
					{this.props.text}
					<Button bsStyle='danger' style={styles.right} onClick={this.props.delete}>X</Button>
				</ListGroupItem>
			</div>
		);
	}
});

module.exports = TodoItem;