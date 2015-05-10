/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function(req, res){
		Events.find().exec(function(err, data){
			console.log(data);
			res.view('index', {data: data})
		})
	},

	new: function(req, res){
		res.view('event/new');
	},

	create: function(req, res){
		var eventData = {
			eventName: req.body.eventName,
			venueName: req.body.venueName,
			photo: req.body.photo,
			price: req.body.price,
			address: req.body.address,
			eventDescription: req.body.eventDescription,
			venueDescription: req.body.venueDescription,
			ticket: req.body.ticket,
			startTime: req.body.startTime,
			endTime: req.body.endTime,
			startDate: req.body.startDate,
			endDate: req.body.endDate,
			interest: req.body.interest,
			neighborhood: req.body.neighborhood,
			city: req.body.city
		}

		console.log(eventData)

		Events.create(eventData).then(function(data){
			res.redirect('/event/show');
		}).catch(function(err){
			sails.log.error(err);
			res.redirect('/event/new')
		})
		
	},

	show: function(req, res){
		Events.find().exec(function(err, data){
			console.log(data);
			res.view('event/show', {data: data})
		})
		// res.view('event/show');
	}	
	
};

