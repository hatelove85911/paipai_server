import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles'

Meteor.methods({
  'isPaishou'(id) {
    id = id || this.userId
    return Roles.userIsInRole(id, 'paishou')
  },
  'registerAsPaishou'(name, phoneNo, id) {
    id = id || this.userId
    var no = Meteor.users.update(id, {
      $set: {
        'profile.name': name,
        'profile.phoneNo': phoneNo
      }
    })
    var result = Roles.addUsersToRoles(id, 'paishou');
  }
})
