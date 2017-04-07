// short -- 110
// med -- 150
// long -- 210

const ipsumApp = {}

const ipsumList = [ "hoser", "two-four", "double double", "eh", "homo milk", "keener", "kerfuffle", "Prime Minister", "beer", "hockey", "poutine", "moose", "igloo", "beaver", "loonie", "twoonie", "kilometres", "Canuck", "brown bread", "coffee whitener", "processed cheese", "brown bread", "rye & ginger", "chocolate bar", "public school", "supply teacher", "zed", "Girl Guides", "chesterfield", "housecoat", "hydro", "serviette", "washroom", "track pants", "Muskoka chair", "postal code", "beavertail", "ketchup chips", "butter tart", "nanaimo bar", "tortiere", "milk in a bag", "Smarties", "Crispy Crunch", "Coffee Crisp", "5-pin bowling", "Mountie", "toque", "plaid", "Wayne Gretzky", "aboot", "colour", "metric system", "health care", "zamboni", "Robertson screwdriver", "give'r", "snowbird", "head'r", "humidex", "processed cheese", "gitch", "runners", "garburator", "eavestrough", "knapsack", "beer store", "49th parallel", "runners", "parkade", "wicket", "pencil crayon", "bachelor apartment", "gasbar", "donair", "icing sugar", "fire hall", "hooped", "mickey", "twenty-sixer", "forty-pounder", "sixty-pounder", "Texas mickey", "pablum", "chip truck", "all-dressed chips", "take off", "freezies", "stagette", "turfed", "gotch", "maternity leave", "Timbit", "franglais", "Newfie", "Trudeau", "maple syrup", "Kinder Surprise", "chinook", "deke", "Kraft Dinner", "lumberjack", "Log Driver's Waltz", "Degrassi", "sugar shack", "sorry", "Justin Bieber", "Celine Dion", "snowmobile", "cottage", "maple leaf", "O Canada", "Great Lakes", "canoe", "caesar", "Trans-Canada", "Prairies", "Maritimes", "Kodiak", "snow", "Bryan Adams", "Canadian Tire money", "CBC", "Peter Mansbridge", "Celine Dion", "province", "Ottawa", "Canada Day", "crokinole", "curling", "lacrosse", "Molson Canadian", "Kids in the Hall", "brews", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "New Brunswick", "Nova Scotia", "Newfoundland", "Prince Edward Island", "Anne of Green Gables", "Nunavut", "Northwest Territories", "Yukon Territory", "our home and native land"
];

console.log('hello world');

// create empty array to push new words onto
let newRandomArray = [];

// create variables that return varying numbers of words
// and push these words onto newRandomArray
// for use in onClick events
let makeShort = () => {
	for (let i = 0; i < 24; i = i + 1) {
		// generate a random number
		let randomWord = ipsumList[Math.floor(Math.random() * ipsumList.length)];
		// let randomWord = ipsumList[randomNumber];
		// let randomWord = ipsumList[randomNumber];
		// add that word to new array called fullArray
		let fullArray = newRandomArray + newRandomArray.push(randomWord);
		console.log('full array', fullArray);
	}
}

let makeMedium = () => {
	for (let i = 0; i < 48; i = i + 1) {
		let randomWord = ipsumList[Math.floor(Math.random() * ipsumList.length)];
		let fullArray = newRandomArray + newRandomArray.push(randomWord);
		// console.log(fullArray);
	}
}

let makeLong = () => {
	for (let i = 0; i < 80; i = i + 1) {
		let randomWord = ipsumList[Math.floor(Math.random() * ipsumList.length)];
		let fullArray = newRandomArray + newRandomArray.push(randomWord);
		// console.log(fullArray);
	}
}

// let punctuation = (fullArrayParam) => {
// 	for (let i = 7; i <fullArrayParam.length; i += 8) {
// 		fullArrayParam[i] += '.';
// 	} console.log('punctuation', punctuation());		
// }


// punctuation();

// capitalize first letter in each sentence

// how to add punctuation? Cupcake Ipsum?


// Create a div with a class of generatedIpsum inside section with a class of displayIpsum and insert fullArray inside
// $('section.displayIpsum').html('<div class="generatedIpsum"><p>' + fullArrayParam + '</p></div>');

// click event
ipsumApp.events = () => {
	$('#button__short').on('click', (e) => {
		e.preventDefault();
		console.log('clicked short');
		makeShort();
	});
	$('#button__medium').on('click', (e) => {
		e.preventDefault();
		console.log('clicked medium');
		makeMedium();
	});
	$('#button__long').on('click', (e) => {
		e.preventDefault();
		console.log('clicked long');
		makeLong();
	});
}


// user clicks paragraph button
// random number is generated based on length of list
// word that matches that random number in the array is returned
// for loop continues to generate random numbers and return words
// until number of words in paragraph is reached
// then periods are concatenated after every 8? words
// commas?
// paragraph is displayed on the page








ipsumApp.init = () => {
} //end of init();

$(() => {
	ipsumApp.init();
	ipsumApp.events();
});
