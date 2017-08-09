// All paishous-related publications

import { Meteor } from 'meteor/meteor';
import { Paishous } from '../paishous.js';

Meteor.publish('paishous.all', function () {
  return Paishous.find();
});
