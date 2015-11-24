Template.hackerlist.helpers({
  //Returns array of hacker objects 
  'hackers' : function () {
    let hackers = Hackers.find();
    return hackers;
  }
});