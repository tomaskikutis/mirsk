var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.set('views', './');

app.use('/assets', express.static('./assets'));

// var React = require('react');
// var Router = require('react-router');
// var routes = require('../app/routes');

// if using express it might look like this
app.use(function (req, res) {
	// pass in `req.url` and the router will immediately match
	// Router.run(routes, req.url, function (Handler) {
	// 	var content = React.renderToString(<Handler/>);
	// 	res.render('main', {content: content});
	// });
    res.render('index', {content: ""});
});

app.listen(3001, function () {
	console.log('listening at 3001');
});
