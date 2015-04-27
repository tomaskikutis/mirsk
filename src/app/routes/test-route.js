var React = require('react');

module.exports = React.createClass({
	testClick: function(){
		console.log("react component mounted and event bound");
	},
	render: function () {
		return (
			<div>
				<h1>This is test route</h1>
				<p>try clicking the <button onClick={this.testClick}>button</button> with console open to make sure component has mounted and is registering click events</p>
			</div>
		);
	}
});
