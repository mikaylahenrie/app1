import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
	Template.CommentList.helpers({
		comments: function() {
			return[
				{
					timestamp: new Date(),
					login: 'mhenrie',
					room: 'main',
					comment: 'First Comment!'
				},
				{
					timestamp: new Date(),
					login: 'mhenrie',
					room: 'main',
					comment: 'Second Comment!'
				}
			];
		}
	});
}

if(Meteor.isServer) {

}