import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BidGuanli from './BidGuanli.js';
import { Bids } from '/imports/api/bids/bids'

export default BidGuanliContainer = createContainer(() => {
  const bidsHandle = Meteor.subscribe('Bids.all');
  const loading = !bidsHandle.ready();
  const bids = Bids.find();
  const bidsExists = !loading && !!bids;
  return {
    loading,
    bidsExists,
    bids: bidsExists ? bids.fetch() : []
  };
}, BidGuanli);
