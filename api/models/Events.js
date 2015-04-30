/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	eventName: {
  		type: 'string'
  	},
  	venueName: {
  		type: 'string'
  	},
  	photo: {
  		type: 'string'
  	},
  	price: {
  		type: 'string'
  	},
  	address: {
  		type: 'string'
  	},
  	eventDescription: {
  		type: 'text'
  	},
  	venueDescription: {
  		type: 'text'
  	},
  	ticketLink: {
  		type: 'string'
  	},
  	startTime: {
  		type: 'string'
  	},
  	endTime: {
  		type: 'string'
  	},
  	startDate: {
  		type: 'string'
  	},
  	endDate: {
  		type: 'string'
  	},
  	interest: {
  		type: 'string',
      enum: ['Shows & Concerts', 'Fine Arts & Theater', 'Bars & Nightlife', 'Outdoor Adventures', 'Sight Seeing', 'Sporting Events', 'Gaming & Arcades', 'Classes', 'Community Events', 'Festivals', 'Bargain Hunters']
  	},
  	neighborhood: {
  		type: 'string'
  	},
  	city: {
  		type: 'string'
  	}

  }
};

