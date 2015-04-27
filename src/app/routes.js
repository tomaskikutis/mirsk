var React = require('react');
var Route = require('react-router').Route;

var ApplicationRoute = require('./routes/application-route');
var TestRoute = require('./routes/test-route');

module.exports = (
	<Route handler={ApplicationRoute}>
		<Route name='testroute' handler={TestRoute}/>
	</Route>
);
