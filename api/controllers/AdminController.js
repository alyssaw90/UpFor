/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt')

module.exports = {
	login: function(req, res){
		res.view('admin/login')
	},

	signup: function(req, res){
		res.view('admin/signup')
	}, 

	create: function(req, res){
		var adminData = {
			venueName: req.body.venueName,
			firstName: req.body.adminFirstName,
			lastName: req.body.adminLastName,
			email: req.body.venueEmail,
			password: req.body.password
		}

		Admin.create(adminData).then(function(data){
			res.redirect('/event/new')
		}).catch(function(err){
			sails.log.error(err);
			res.redirect('/admin/signup')
		})
	}
};

