import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PaishouGuanli from './PaishouGuanli'
import { Roles } from 'meteor/alanning:roles'

export default PaishouGuanliContainer = createContainer(() => {
  const paishousHandle = Meteor.subscribe('paishous.all');
  const loading = !paishousHandle.ready();
  const paishous = Roles.getUsersInRole('paishou').fetch();
  return {
    loading,
    paishous,
    onAdd () {
    }
  };
}, PaishouGuanli);
