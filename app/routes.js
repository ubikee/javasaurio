/**
* Created with javasaurio.
* User: jeroldangarcia
* Date: 2014-03-26
* Time: 12:43 PM
* To change this template use Tools | Templates.
*/
module.exports = function(app) {
	app.get('/login', function(req, res) {
		res.render('login.html')
   });
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
