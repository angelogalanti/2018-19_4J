var person1 = {
  firstName: "Donald",
  lastName : "Duck",
  email : "a@a.com",
}; 
var person2 = {
  firstName: "Jim",
  lastName : "Carrey",
  email : "b@b.com",
}; 
var person3 = {
  firstName: "Mickey",
  lastName : "Mouse",
  email : "c@c.com",
}; 

var people = [person1, person2, person3];
var person;

function loadData() {
  for (i = 0; i < people.length; i++) {
    var name = "name" + (i+1);
    var lastname = "lastname" + (i+1);
    var mail = "mail" + (i+1);
    document.getElementById(name).innerHTML = people[i].firstName;
    document.getElementById(lastname).innerHTML = people[i].lastName;
    document.getElementById(mail).innerHTML = people[i].email;
    console.log(people[i].firstName);
  }
}
