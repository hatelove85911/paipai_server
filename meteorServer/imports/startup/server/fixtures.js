// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  // create a default user
  if ( Meteor.users.find().count() === 0 ) {
      Accounts.createUser({
          username: 'junshen',
          email: 'redwolf85911@gmail.com',
          password: 'sj198511',
          profile: {
              first_name: 'Jun',
              last_name: 'Shen',
              company: 'Successfactors',
          }
      });
  }
});
