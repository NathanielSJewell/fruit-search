//Selects input
const input = document.querySelector('#fruit');
//Selects the dropdown div
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
	'Apple',
	'Apricot',
	'Avocado 🥑',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu'
];

//Step 5: Create an event that will trigger when the user types.
input.addEventListener(`input`, function() {
	let results = search(input.value);
	showSuggestions(results);
});

function search(str) {
	str = str.toLowerCase();
	let results = fruit.filter(function(arrayItem) {
		arrayItem = arrayItem.toLowerCase();
		if (arrayItem.includes(str)) {
			return true;
		}
	});
	console.log(results);
	return results;
}

//Returns an array list of results!

function showSuggestions(arr) {
	suggestions.innerHTML = ``;

	arr.forEach(function(val) {
		li = document.createElement(`li`);
		li.innerText = val;
		suggestions.appendChild(li);
		li.addEventListener(`click`, (event) => {
			let clickValue = event.target.innerText;
			input.value = clickValue;
			if (input.value === clickValue) {
				suggestions.innerHTML = ``;
			}
		});
	});
}
