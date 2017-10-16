var person= {
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}
var personString =JSON.stringify(person);
window.localStorage.setItem("address",personString);

var getPerson = window.localStorage.getItem("address");
var personJSON = JSON.parse(getPerson);

alert(person.firstName + " is from " + person.address.city);

document.write(person.firstName +" "+ person.lastName + " is from " + person.address.city + " and lives on " + person.address.streetAddress + ".");