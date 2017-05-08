const React = require('react');
const {Component} = require('react')
const {createStore} = require('redux')
const {Provider, connect} = require('react-redux')

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember']

// ACTION: CREATORS
function setFilter(by) {
	return { type:'SET_FILTER', by }
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

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilter: (ev) => dispatch(setFilter(ev.target.value))
	}
}


class FilterList extends React.Component {
	render() {
		const {filterBy, updateFilter} = this.props
		return(
			<div>
				<input type = "text" onChange = { updateFilter }/>
				<List items = {FRAMEWORKS} filterBy = {filterBy} />
			</div>
		)
	}
}

// Very Important
FilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList)

const List = ({ items, filterBy }) => {
	return (
		<ul>
			{
				items
				.filter(item => item.indexOf(filterBy) > -1)
				.map((item, i) => <li key = {i}>{item}</li>)
			}
		</ul>
		)
}

module.exports = class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
	          <div className="App-header">
	            <h2>Welcome to React</h2>
	          	<FilterList />	            
	          </div>			

			</Provider>
			)
	}
}

