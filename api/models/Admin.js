/**
* Admin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
//Model attributes
  attributes: {
  	adminFirstName: {
  		type: 'string'
  	},
  	adminLastName: {
  		type: 'string'
  	},
  	venueName: {
  		type: 'string'
  	},
  	venueEmail: {
  		type: 'string'
  	},
  	password: {
  		type: 'string'
  	},

  	toJSON:function(){
      var adminObject = this.toObject();
      delete adminObject.password;
      return adminObject
    }
  },

  //Encrypt password
  beforeCreate:function(value, cb){
    bcrypt.hash(value.password, 10, function(err, hash){
      if(err) return cb(err);
      value.password = hash;
      cb();
    })
  }
};

