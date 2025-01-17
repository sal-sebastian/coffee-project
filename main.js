"use strict"


function renderCoffee(coffee) {
    var html ='<div class="card m-2 text-white bg-dark mb-3 coffee" style="max-width: 12rem;">'
    html += '<div class="col card-body">';
    html += '<h4 class="card-title">' + coffee.name + '</h4>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '<br>';
    html += '</div>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    coffeeBody.innerHTML = renderCoffees(filteredCoffees);
}


// From https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
function search_coffee() {
    var input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    var coffee = document.getElementsByClassName('coffee');

    for (var i = 0; i < coffee.length; i++) {
        if (!coffee[i].innerHTML.toLowerCase().includes(input)) {
            coffee[i].style.display="none";
        }
        else {
            coffee[i].style.display="initial";
        }
    }
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function CreateCoffee() {

    var newlyCreatedCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newRoast.value
    }
    coffees.push(newlyCreatedCoffee);
}



var coffeeBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#searchbar')

coffeeBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change',updateCoffees);

searchBar.addEventListener('keyup', search_coffee);



// ADD COFFEE FUNCTIONALITY
var newCoffeeName = document.querySelector('#coffee-name');
var newRoast =  document.querySelector('#new-roast');
var submitNewCoffee = document.querySelector('#submit-new-coffee');

submitNewCoffee.addEventListener('click', CreateCoffee);
submitNewCoffee.addEventListener('click', updateCoffees);