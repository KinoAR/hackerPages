
if (Meteor.isServer){
	//Publish information to the server
	Meteor.publish('hackers', function(){
		 return Hackers.find();
	});

	Meteor.publish('users', function(){
		return Meteor.users.find();
	});
}

if(Meteor.isClient)
{
	//Allow client to access(subscribe to) these publications
	Meteor.subscribe("hackers");
	Meteor.subscribe("users");
}

Hackers.allow ({
	insert: function (){
		return true;
	},

	update: function(){
		return true;
	}
});


