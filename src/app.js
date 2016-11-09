'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var AmdApp = require('./common/application');

AmdApp.start('.application');
