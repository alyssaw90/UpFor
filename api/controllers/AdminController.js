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
	}
};

