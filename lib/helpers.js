Hackers = new Mongo.Collection('hackers');

if (Meteor.isServer){
	Meteor.publish("hackers", function(){
		return hackers.find();
	});
}

if(Meteor.isClient)
{

	Meteor.subscribe("hackers");

	Template.body.helpers({
		hackers : function() {
			return Hackers.find({});
		}
	});
}

Hackers.allow ({
	insert: function (){
		return true;
	},

	update: function(){
		return true;
	}
});


