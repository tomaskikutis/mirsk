var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.set('views', './');

app.use('/', express.static('../static'));

var React = require('react');
var Router = require('react-router');
var routes = require('../dist/app/routes');

// if using express it might look like this
app.use(function (req, res) {
	// pass in `req.url` and the router will immediately match
	Router.run(routes, req.url, function (Handler) {
		var content = React.renderToString(React.createElement(Handler, null));
		res.render('index', {content: content});
	});
});

app.listen(3001, function () {
	console.log('listening at 3001');
});
