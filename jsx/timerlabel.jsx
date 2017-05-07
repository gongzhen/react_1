const React = require('react')
const ReactDOM = require('react-dom')

module.exports = class TimerLabel extends React.Component {
	render(){
		if(this.props.timeLeft == null || this.props.timeLeft == 0) {
			return <div/>
		}		
		return <h1>timeLeft:{this.props.timeLeft}</h1>
	}
}