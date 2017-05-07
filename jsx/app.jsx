const React = require('react')
const ReactDOM = require('react-dom')
const TimerCompoment = require('./timer.jsx')
const FilterList = require('./filteredlist.jsx');

ReactDOM.render(
  <TimerCompoment />,
  document.getElementById('root')
);

ReactDOM.render(
  <FilterList />,
  document.getElementById('App-intro')  
);