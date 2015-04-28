/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create: function(req, res){
		var eventData = {
			eventName: req.body.eventName,
			venueName: req.body.venueName,
			photo: req.body.photo,
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

		Events.create(eventData).exec(function(err, event){
			if(err) res.send(400, err);
			res.send(event)
		});
	};	
	
};

