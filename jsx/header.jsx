const React = require('react')

module.exports = class HeaderCompoment extends React.Component{
	render() {
		return(
			<h2>{this.props.title}</h2>			
		)
	}
}