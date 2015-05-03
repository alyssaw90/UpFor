/**
* Admin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      email: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    },

    toJSON:function(){
    	var adminObject = this.toObject();
    	delete adminObject.password;
    	return adminObject;
    }
  },
  beforeCreate: function(value, callback){
  	bcrypt.hash(value.password, 10, function(err, hash){
  		if(err) return cb(err);
  		value.password = hash;
  	})
  }
};

