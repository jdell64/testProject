/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    username: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      enum: ['user', 'admin'],
      defaultsTo: 'user'
    },

    prettyPrint: function (options, cb) {
      // Test function.
      User.findOne(options.id).exec(function (err, theUser) {
        if (err) return cb(err);
        if (!theUser) return cb(new Error('User not found.'));
        return "User:\t" + theUser.name + "\nUsername:\t" +
          theUser.username + "\nRole:\t" + theUser.role;
      })
    }


  }
};

