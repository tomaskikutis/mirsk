var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<h1>welcome!</h1>
				<Link to="testroute">go to test route</Link>
				<RouteHandler/>
			</div>
		);
	}
});
