const React = require('react')
const Header = require('./header.jsx')
const Button = require('./button.jsx')
const TimerLabel = require('./timerlabel.jsx');

module.exports = class TimerCompoment extends React.Component{

	constructor(props) {
		super(props);
		this.state = {timeLeft: null, timer: null}
		this.startTimer = this.startTimer.bind(this)
	}

	// this.props.startTimer(this.props.time  + 0)
	startTimer(timeLeft) {
	    clearInterval(this.state.timer)
		// console.log("1 timeLeft:" + this.state.timeLeft + ", timer:" + this.state.timer);	    
	    let timer = setInterval(() => {	      
	      var timeLeft = this.state.timeLeft - 1
	      console.log('2: Inside of setInterval this.state.timeLeft :' + this.state.timeLeft)
	      if (timeLeft == 0) {
	      	clearInterval(timer)
	      }
	      this.setState({timeLeft: timeLeft})
	    }, 1000)
	    // console.log('1: After setInterval')
	    console.log('3: Outsite of setInterval timeLeft:' + timeLeft)	    
	    return this.setState({timeLeft: timeLeft,
	      timer: timer})
	}
	
	pageHeader(title) {
		return `${title}`
	}		

	render() {
		return(
			<div>
				<Header title = {this.pageHeader("Timer") } />
				<div role = "group">
					<Button time = "5" startTimer = {this.startTimer} />
					<Button time = "10" startTimer = {this.startTimer} />
					<Button time = "15" startTimer = {this.startTimer} />
				</div>
				<TimerLabel timeLeft = {this.state.timeLeft} />
			</div>
		)
	}
}
