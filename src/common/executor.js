'use strict';

var $ = require('jquery');
/*
 * Create a method to execute all the controllers on the application
 * @param {Object} Options: The object with the available options to execute the controller.
 */
module.exports = function(options) {
  // Call dynamically the controller
  var AmdApp = require('./application');
  var MainLayout = AmdApp.getLayout();

  var opts = $.extend({
    target: MainLayout.mainRegion,
    data: {},
    controller: '',
    topMenu: null,
    method: 'run'
  }, options);

  // Call dynamically the controller
  var controller = require('../app/controllers/' + opts.controller);
  controller.init(opts.data);
  controller[ opts.method ].call(this, opts.target, opts.data);
};
