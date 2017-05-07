const React = require('react')
const ReactDOM = require('react-dom')
const Button = require('./button.jsx')

module.exports = class ButtonGroup extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return( 
			<div>
				<Button title = "5" />
				<Button title = "10" />
				<Button title = "15" />
			</div>
		)		
	}

}