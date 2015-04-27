var express = require('express');
var app = express();

app.use('/', express.static('../static'));

var React = require('react');
var Router = require('react-router');
var routes = require('../build/app/routes');

app.use(function (req, res) {
	// pass in `req.url` and the router will immediately match
	Router.run(routes, req.url, function (Handler) {
		var content = React.renderToString(<Handler/>);
		var page = '\
			<!DOCTYPE html>\
			<html>\
				<head>\
					<meta charset="utf-8">\
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\
				</head>\
				<body>\
					<div id="app">' + content + '</div>\
					<script type="text/javascript" src="app.js"></script>\
				</body>\
			</html>\
		';

		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Content-Length': page.length
		});
		
		res.end(page);
	});
});

app.listen(3001, function () {
	console.log('listening at 3001');
});
