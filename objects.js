function Person(firstName, lastName, age, geneder){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.geneder = gender;
}

Person.prototype.greet = function(name) {
	return "Hello " + name + ". My name is " + this.firstName;
};



var per1 = new Person ("Ron", "Arevalo", '28');
var per2 = new Person ("Brooke", "Arevalo");

console.log(per1);
console.log(name(per1);


var bool = new Boolean(True);


function genre (genre){
	console.log(genre + ":" + this.Title)
}

var book1 = {
	"Author": "Jonathan Safren Foer",
	"Title": "Extemely Loud and Incredibly Close",
	"Publication Date": "2005",
	};

var book2 = {
	"Author": "Ralph Waldo Emerson",
	"Title": "Invisible Man",
	"Publication Date": "1952",
}

var whatTitle1 =genre.bind(book1);
whatTitle1("book1");