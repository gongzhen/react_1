const React = require('react')
const Header = require('./header.jsx')
// const ButtonGroup = require('./buttongroup.jsx')
// <ButtonGroup startTimer = {this.startTimer} />

class Timer extends React.Component {
	render(){
		if(this.props.timeLeft == null || this.props.timeLeft == 0) {
			return <div/>
		}		
		return <h1>timeLeft:{this.props.timeLeft}</h1>
	}
}

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this) // this.startTime: function(){}
	}

	startTimer(event){ //[event: object]
		// console.log("this.props.startTimer:" + this.props.time)
		// this.props.starTimer is function(){}
		return this.props.startTimer(this.props.time)
	}

	render(){
		// console.log("this.startTimer:" + this.startTimer)
		return( 
			// this.startTimer is function(){}
			<button  
			type="button" onClick={this.startTimer}> 
			{this.props.time} seconds 
			</button>
		)
	}
}

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
				<Timer timeLeft = {this.state.timeLeft} />
			</div>
		)
	}
}
