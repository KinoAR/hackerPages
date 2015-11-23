Hackers = new Mongo.Collection('hackers');
if(Meteor.isClient)
{
	Template.body.helpers({
		hackers : function() {
			return Hackers.find({});
		}
	});
}