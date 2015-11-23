Template.hackerProfile.events({
	'click #submit': function (event, template) {
		let legalname = template.find('#legal-name').value;
		let psuedonym = template.find('#psuedonym').value;
		let email =  template.find('#email').value;
		let bestHack = template.find('#best-hack').value;

		let hacker = {
			legalname: legalname, 
			pseduonym: psuedonym,
			email: email,
			bestHack: bestHack
		}
		console.log(hacker);
	Hackers.insert(hacker);

  }
});