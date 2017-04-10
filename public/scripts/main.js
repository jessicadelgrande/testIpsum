"use strict";

var ipsumApp = {};

var ipsumList = ["hoser", "two-four", "double double", "eh", "homo milk", "keener", "kerfuffle", "Prime Minister", "beer", "hockey", "poutine", "moose", "igloo", "beaver", "loonie", "twoonie", "kilometres", "Canuck", "brown bread", "coffee whitener", "processed cheese", "brown bread", "rye & ginger", "chocolate bar", "public school", "supply teacher", "zed", "Girl Guides", "chesterfield", "housecoat", "hydro", "serviette", "washroom", "track pants", "Muskoka chair", "postal code", "beavertail", "ketchup chips", "butter tart", "nanaimo bar", "tortiere", "milk in a bag", "Smarties", "Crispy Crunch", "Coffee Crisp", "5-pin bowling", "Mountie", "toque", "plaid", "Wayne Gretzky", "aboot", "colour", "metric system", "health care", "zamboni", "Robertson screwdriver", "give'r", "snowbird", "head'r", "humidex", "processed cheese", "gitch", "runners", "garburator", "eavestrough", "knapsack", "beer store", "49th parallel", "runners", "parkade", "wicket", "pencil crayon", "bachelor apartment", "gasbar", "donair", "icing sugar", "fire hall", "hooped", "mickey", "twenty-sixer", "forty-pounder", "sixty-pounder", "Texas mickey", "pablum", "chip truck", "all-dressed chips", "take off", "freezies", "stagette", "turfed", "gotch", "maternity leave", "Timbit", "franglais", "Newfie", "Justin Trudeau", "maple syrup", "Kinder Surprise", "chinook", "deke", "Kraft Dinner", "lumberjack", "Log Driver's Waltz", "Degrassi", "sugar shack", "sorry", "Justin Bieber", "Celine Dion", "snowmobile", "cottage", "maple leaf", "O Canada", "Great Lakes", "canoe", "caesar", "Trans-Canada", "Prairies", "Maritimes", "Kodiak", "snow", "Bryan Adams", "Canadian Tire money", "CBC", "Peter Mansbridge", "Celine Dion", "province", "Ottawa", "Canada Day", "crokinole", "curling", "lacrosse", "Molson Canadian", "Kids in the Hall", "brews", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "New Brunswick", "Nova Scotia", "Newfoundland", "Prince Edward Island", "Anne of Green Gables", "Nunavut", "Northwest Territories", "Yukon Territory", "our home and native land", "we the north", "true north strong and free"];

console.log('hello world');

// create empty array to push new words onto
var newRandomArray = new Array();

// create a variable that returns 8 words
// and push these words onto newRandomArray
var generateRandomSentence = function generateRandomSentence() {
	for (var i = 0; i < 8; i = i + 1) {
		// capitalize first letter and add period to end
		var capitalizeFirstLetter = function capitalizeFirstLetter(snt) {
			return snt.charAt(0).toUpperCase() + snt.slice(1) + ".";
		};

		// generate a random number
		var randomNumber = Math.floor(Math.random() * ipsumList.length);
		var randomWord = ipsumList[randomNumber];
		// add that word to new empty array called newRandomArray
		newRandomArray.push(randomWord);
		var sentence = newRandomArray.join(' ');
		var finalSentence = capitalizeFirstLetter(sentence);
		$("section.displayIpsum").html("<div class='completeParagraph'><p> " + finalSentence + " </p></div>");
	}
};

var generateShortParagraph = function generateShortParagraph() {
	for (var i = 0; i < 5; i = i + 1) {
		generateRandomSentence();
	};
};

// click event
ipsumApp.events = function () {
	$('#button__short').on('click', function (e) {
		e.preventDefault();
		console.log('clicked short');
		generateShortParagraph();
	});
	$('#button__medium').on('click', function (e) {
		e.preventDefault();
		console.log('clicked medium');
		makeMedium();
	});
	$('#button__long').on('click', function (e) {
		e.preventDefault();
		console.log('clicked long');
		makeLong();
	});
};

ipsumApp.init = function () {}; //end of init();

$(function () {
	ipsumApp.init();
	ipsumApp.events();
});