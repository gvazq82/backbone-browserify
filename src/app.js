'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var AmdApp = require('./common/application');

// Need to require the controllers
require('./app/controllers/about');
require('./app/controllers/contact');
require('./app/controllers/exception');
require('./app/controllers/home');

AmdApp.start('.application');
