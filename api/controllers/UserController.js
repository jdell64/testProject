/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  json: function (request, response){
    response.json({time: new Date()})
  },
  'buy-oauth': function (request, response) {
    return response.redirect('https://gum.co/oauthnode')
  }

};

