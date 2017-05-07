const React = require('react')
const ReactDOM = require('react-dom')

module.exports = class ButtonCompoment extends React.Component{
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this)
	}

	startTimer(event) {
		return this.props.startTimer(this.props.time)
	}

	render() {
		return(
			<button type="button" onClick = {this.startTimer}>
				{this.props.title} seconds
			</button>
		)
	}
}