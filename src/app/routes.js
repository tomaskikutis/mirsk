var React = require('react');
var Route = require('react-router').Route;

var ApplicationRoute = require('./routes/application-route');
var ProductsRoute = require('./routes/products-route');

module.exports = (
	<Route handler={ApplicationRoute}>
		<Route name='products' handler={ProductsRoute}/>
	</Route>
);
