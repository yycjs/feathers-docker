'use strict';

const message = require('./message');

const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb').replace('tcp', 'mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(message);
};
