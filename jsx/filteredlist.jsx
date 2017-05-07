const React = require('react')
const ReactDOM = require('react-dom')

module.exports = class FilterList extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	filterBy: ''
	  };
	}

	updateFilter(ev) {
		console.log(ev.target)
		console.log(ev.target.value)
		this.setState({filterBy: ev.target.value})
	}

	render() {
		const {filterBy} = this.state
		const frameworks = ['React', 'Angular', 'Vue', 'Ember']
		// simple input box and our list componet
		const List = ({ items, filterBy }) => {
			return(
					<ul>
						{
							items
							.filter(item => item.indexOf(filterBy) > -1)
							.map((item, i) => <li key ={i}>{item}</li>)
						}
					</ul>
				)
		}

		return(
			<div>
				<input type = "text" onChange = {(ev) => this.updateFilter(ev) }/>
				<List items = {frameworks} filterBy = {filterBy} />
			</div>
		)
	}
}