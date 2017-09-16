// Import client startup through a single index entry point

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from '/imports/ui/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
