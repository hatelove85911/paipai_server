// All paishous-related publications
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('paishous.all', function() {
    if (!Roles.userIsInRole(this.userId, 'superadmin')) {
      throw new Meteor.Error('Not Authorized', 'not admin', 'only admin view all paishous')
    }
    return Roles.getUsersInRole('paishou')
});

