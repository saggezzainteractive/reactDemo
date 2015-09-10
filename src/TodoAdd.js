var React = require('react'),
	Input = require('react-bootstrap/lib/Input');

var TodoAdd = React.createClass({
	propTypes: {
		add: React.PropTypes.func.isRequired
	},

	getInitialState () {
		return {
			text: ''
		};
	},

	handleChange (e) {
		this.setState({
			text: e.target.value
		});
	},

	handleKeyDown (e) {
		if (e.keyCode === 13) {
			this.props.add({text: this.state.text});
			this.setState({
				text: ''
			});
		}
	},

	render () {
		return (
			<Input type='text'
				placeholder='Enter text...'
				value={this.state.text}
				label='Add new Todo Item'
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown} />
		);
	}
});

module.exports = TodoAdd;