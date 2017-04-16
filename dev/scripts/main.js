const ipsumApp = {}

const ipsumList = [ "hoser", "two-four", "double-double", "homo milk", "keener", "kerfuffle", "Prime Minister", "beer", "hockey", "poutine", "moose", "igloo", "beaver", "loonie", "twoonie", "kilometres", "Canuck", "brown bread", "coffee whitener", "processed cheese", "brown bread", "rye & ginger", "chocolate bar", "public school", "supply teacher", "zed", "Girl Guides", "chesterfield", "housecoat", "hydro", "serviette", "washroom", "track pants", "Muskoka chair", "postal code", "beavertail", "ketchup chips", "butter tart", "nanaimo bar", "tortiere", "milk in a bag", "Smarties", "Crispy Crunch", "Coffee Crisp", "5-pin bowling", "Mountie", "toque", "plaid", "Wayne Gretzky", "aboot", "colour", "metric system", "health care", "zamboni", "Robertson screwdriver", "give'r", "snowbird", "head'r", "humidex", "processed cheese", "gitch", "runners", "garburator", "eavestrough", "knapsack", "beer store", "49th parallel", "runners", "parkade", "wicket", "pencil crayon", "bachelor apartment", "gasbar", "donair", "icing sugar", "fire hall", "hooped", "mickey", "twenty-sixer", "forty-pounder", "sixty-pounder", "Texas mickey", "pablum", "chip truck", "all-dressed chips", "take off", "freezies", "stagette", "turfed", "gotch", "maternity leave", "Timbit", "franglais", "Newfie", "Justin Trudeau", "maple syrup", "Kinder Surprise", "chinook", "deke", "Kraft Dinner", "lumberjack", "Log Driver's Waltz", "Degrassi", "sugar shack", "sorry", "Justin Bieber", "Celine Dion", "snowmobile", "cottage", "maple leaf", "O Canada", "Great Lakes", "canoe", "caesar", "Trans-Canada", "Prairies", "Maritimes", "Kodiak", "snow", "Bryan Adams", "Canadian Tire money", "CBC", "Peter Mansbridge", "Celine Dion", "province", "Ottawa", "Canada Day", "crokinole", "cribbage", "curling", "lacrosse", "Molson Canadian", "Kids in the Hall", "brews", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "New Brunswick", "Nova Scotia", "Newfoundland", "Prince Edward Island", "Anne of Green Gables", "Nunavut", "Northwest Territories", "Yukon Territory", "our home and native land", "we the north", "true north strong and free", "the Group of Seven", "brewski"
];

console.log("hello world");

let clipboard = new Clipboard(".copyButton");
clipboard.on('success', function(e) {
	console.log(e);
});
clipboard.on('error', function(e) {
	console.log(e);
});

// create empty array for new words
let newRandomArray = [];

// create empty array for new sentences
let combinedSentences = [];

// create a variable that returns 5 words
// and push these words onto newRandomArray
const generateRandomWords = () => {
	for (let i = 0; i < 5; i = i + 1) {
		// generate a random number
		let randomNumber = Math.floor(Math.random() * ipsumList.length);
		let randomWord = ipsumList[randomNumber];
		// add that word to new empty array called newRandomArray
		newRandomArray.push(randomWord);
	}
	let sentence = newRandomArray.splice(0);
	let joinedSentence = sentence.join(" ");
	// capitalize first letter and add period and eh to end
	let uppercaseFirstLetter = joinedSentence.charAt(0).toUpperCase();
	let stringWithoutFirstLetter = joinedSentence.slice(1)
	let capitalizeFirstLetter = () => {
		return uppercaseFirstLetter + stringWithoutFirstLetter + ", eh. ";
	}
	const finalSentence = capitalizeFirstLetter();
	combinedSentences.push(finalSentence);
} 

const shortParagraph = () => {
	for (let i = 0; i < 4; i = i + 1) {
		generateRandomWords();
	}
	let finalShort = combinedSentences.join(" ");
	$("section.displayIpsum").html(`<div class="completeParagraph"><p id="displayParagraph"> ${finalShort} </p></div>`);
}

const mediumParagraph = () => {
	for (let i = 0; i < 8; i = i + 1) {
		generateRandomWords();
	}
	let finalMedium = combinedSentences.join(" ");
	$("section.displayIpsum").html(`<div class="completeParagraph"><p> ${finalMedium} </p></div>`);
}

const longParagraph = () => {
	for (let i = 0; i < 12; i = i + 1) {
		generateRandomWords();
	}
	let finalLong = combinedSentences.join(" ");
	$("section.displayIpsum").html(`<div class="completeParagraph"><p> ${finalLong} </p></div>`);
}

// click events
ipsumApp.events = () => {
	$("#button__short").one("click", (e) => {
		e.preventDefault();
		$(".singleButton").addClass("clicked");
		$(".singleButton").addClass("fadeOut");
		$(".displayIpsum").addClass("slideUp");
		$(".resetButton").removeClass("hidden");
		$(".resetButton").removeClass("fadeIn");
		$(".resetButton").addClass("slideUp");
		$(".copyButton").removeClass("hidden");
		$(".copyButton").addClass("slideUp");
		$("h2").addClass("fadeOut");
		newRandomArray = [];
		shortParagraph();
	});
	$("#button__medium").one("click", (e) => {
		e.preventDefault();
		$(".singleButton").addClass("clicked");
		$(".singleButton").addClass("fadeOut");
		$(".displayIpsum").addClass("slideUp");
		$(".resetButton").addClass("slideUp");
		$("h2").addClass("fadeOut");
		newRandomArray = [];
		mediumParagraph();
	});
	$("#button__long").one("click", (e) => {
		e.preventDefault();
		$(".singleButton").addClass("clicked");
		$(".singleButton").addClass("fadeOut");
		$(".displayIpsum").addClass("slideUp");
		$(".resetButton").addClass("slideUp");
		$("h2").addClass("fadeOut");
		newRandomArray = [];
		longParagraph();
	});
	$("#button__tryAgain").on("click", (e) => {
		e.preventDefault();
		$(".singleButton").addClass("fadeIn");
		newRandomArray = [];
		window.location = "";
	});
}

ipsumApp.init = () => {
}

$(() => {
	ipsumApp.init();
	ipsumApp.events();
});
