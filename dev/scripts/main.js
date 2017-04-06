// short -- 110
// med -- 150
// long -- 210

const ipsumApp = {}

const ipsumList = [ "hoser", "two-four", "double double", "eh", "homo milk", "keener", "kerfuffle", "Prime Minister", "beer", "hockey", "poutine", "moose", "igloo", "beaver", "loonie", "twoonie", "kilometres", "Canuck", "brown bread", "coffee whitener", "processed cheese", "brown bread", "rye & ginger", "chocolate bar", "public school", "supply teacher", "zed", "Girl Guides", "chesterfield", "housecoat", "hydro", "serviette", "washroom", "track pants", "Muskoka chair", "postal code", "beavertail", "ketchup chips", "butter tart", "nanaimo bar", "tortiere", "milk in a bag", "Smarties", "Crispy Crunch", "Coffee Crisp", "5-pin bowling", "Mountie", "toque", "plaid", "Wayne Gretzky", "aboot", "colour", "metric system", "health care", "zamboni", "Robertson screwdriver", "give'r", "snowbird", "head'r", "humidex", "processed cheese", "gitch", "runners", "garburator", "eavestrough", "knapsack", "beer store", "49th parallel", "runners", "parkade", "wicket", "pencil crayon", "bachelor apartment", "gasbar", "donair", "icing sugar", "fire hall", "hooped", "mickey", "twenty-sixer", "forty-pounder", "sixty-pounder", "Texas mickey", "pablum", "chip truck", "all-dressed chips", "take off", "freezies", "stagette", "turfed", "gotch", "maternity leave", "Timbit", "franglais", "Newfie", "Trudeau", "maple syrup", "Kinder Surprise", "chinook", "deke", "Kraft Dinner", "lumberjack", "Log Driver's Waltz", "Degrassi", "sugar shack", "sorry", "Justin Bieber", "Celine Dion", "snowmobile", "cottage", "maple leaf", "O Canada", "Great Lakes", "canoe", "caesar", "Trans-Canada", "Prairies", "Maritimes", "Kodiak", "snow", "Bryan Adams", "Canadian Tire money", "CBC", "Peter Mansbridge", "Celine Dion", "province", "Ottawa", "Canada Day", "crokinole", "curling", "lacrosse", "Molson Canadian", "Kids in the Hall", "brews", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "New Brunswick", "Nova Scotia", "Newfoundland", "Prince Edward Island", "Anne of Green Gables", "Nunavut", "Northwest Territories", "Yukon Territory"
];

console.log('hello world');

let newRandomArray = [];

var makeShort = () => {
	for (let i = 0; i < 30; i = i + 1) {
		// generate a random number
		let randomWord = ipsumList[Math.floor(Math.random() * ipsumList.length)];
		// add that word to new array
		newRandomArray + newRandomArray.push(randomWord);
		// console.log(newWord);
		console.log(newRandomArray);
	}
}

// how to add punctuation? Cupcake Ipsum?

// click event
ipsumApp.events = () => {
	$('#button__short').on('click', (e) => {
		e.preventDefault();
		console.log('clicked short');
		makeShort();


		//get me 30 words from 
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
