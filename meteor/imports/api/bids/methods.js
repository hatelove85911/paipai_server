import { Meteor } from 'meteor/meteor';
import { Bids } from './bids.js';
import { Roles } from 'meteor/alanning:roles'
import { check } from 'meteor/check'

Meteor.methods({
  'createBid'(time) {
    check(time, String)
    if (!Roles.userIsInRole(this.userId, 'superadmin')) {
      throw new Meteor.Error('Not Authorized', 'not admin', 'only admin can create bid, you are not admin!')
    }
    return Bids.insert({
      time,
      status: 'open',
      recruit: 'no'
    })
  }
})
