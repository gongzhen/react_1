const React = require('react');
const {Component} = require('react')
const {createStore} = require('redux')

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember']

// ACTION: CREATORS
function setFilter(by) {
	return {type:'SET_FILTER', by}
}

// REDUCER
const initialState = {
	filterBy: ''
}

function reducer(state = initialState, action) {
	switch(action.type) {
		case 'SET_FILTER':
			console.log(`Our filter was ${state.filterBy} byt is now ${action.by}!`)
			return Object.assign({}, state, {
				filterBy: action.by
			})
		default:
			return state
	}
}

// STORE
const store = createStore(reducer);

// react-redux
const mapStateToProps = (state) => {
	return {
		filterBy:state.filterBy
	}
}

module.exports = class FilterList extends React.Component {
	constructor(props) {
	  super()
	  // default state
	  this.state = store.getState()
	  // function that will execute every time the state changes.
	  this.unsubscribe = store.subscribe(() => {
	  	this.setState(store.getState())
	  })
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	updateFilter(ev) {
		store.dispatch(setFilter(ev.target.value))
	}

	render() {
		const {filterBy} = this.state
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
				<List items = {FRAMEWORKS} filterBy = {filterBy} />
			</div>
		)
	}
}