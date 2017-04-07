// state

var state = {
    items: []
};

// modification functions

var addItem = function(state, item) {
    state.items.push(item);
};
	

var deleteItem = function(state, itemIndex) {

}


//render state

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return `<li>
        <span class="shopping-item"> ${item} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    });
    element.html(itemsHTML);
};


// event listeners

$(function(){ 
	$('#js-shopping-list-form').submit(function(){
		event.preventDefault();
		let userInput = $('#shopping-list-entry').val();
		addItem(state, userInput);
		let shoppingList = $('.shopping-list');
		renderList(state, shoppingList);

	});

	$('.shopping-item-delete').on('click', function(){

	})

	$('.shopping-item-toggle').on('click', function(){
		$(this).toggleClass('.shopping-item__checked');

	});



});

//get user input value .... event listener submit
// push that value into the state
// render that value into the html
// event listers for checks
//event listenrs for deletes