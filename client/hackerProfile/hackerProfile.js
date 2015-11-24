Template.hackerProfile.events({
  //Gather information from client and send it to the database
	'click #submit': function (event, template) {
    event.preventDefault();

		let legalname = template.find('#legal-name').value;
		let pseudonym = template.find('#pseudonym').value;
		let email =  template.find('#email').value;
		let bestHack = template.find('#best-hack').value;

    //Create hacker object
		let hacker = {
			legalname: legalname, 
			pseudonym: pseudonym,
			email: email,
			bestHack: bestHack
		}

		console.log(hacker);
		console.log(Meteor.user());
    Hackers.insert(hacker);
    alert("Form information Submitted");
  }
});

Template.hackerProfile.helpers({
  //Return the email address of the user
  'useremail' : function () {
    let user = Meteor.user();
    return user.emails[0].address;
  }
});