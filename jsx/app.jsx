const React = require('react')
const ReactDOM = require('react-dom')
const TimerCompoment = require('./timer.jsx')
const App = require('./filteredlist.jsx');

ReactDOM.render(
  <TimerCompoment />,
  document.getElementById('root')
);

ReactDOM.render(
  <App />,
  document.getElementById('App-intro')  
);