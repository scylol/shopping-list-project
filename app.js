// state

var state = {
    items: []
};

// modification functions

var addItem = function(state, item) {
    state.items.push({name:item, checked:false});
};
	

var deleteItem = function(state, itemIndex) {
  state.items.splice(itemIndex, 1);
 };



var checkItem = function(state,item, itemIndex) {
    state.items[itemIndex].checked = !state.items[itemIndex].checked;
    item.toggleClass('shopping-item__checked');
};



//render function

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return `<li>
        <span class="shopping-item"> ${item.name} </span>
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
  let shoppingList = $('.shopping-list');

	$('#js-shopping-list-form').submit(function(){
        
		event.preventDefault();
		let userInput = $('#shopping-list-entry').val();
		addItem(state, userInput);
		renderList(state, shoppingList);

	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(){
      console.log('delete');
      let index = $(this).closest('li').index();
      deleteItem(state,index);
      renderList(state, shoppingList);

	});
    
	$('.shopping-list').on('click', '.shopping-item-toggle', function(){

    let lineCheck = $(this).closest('li').children('.shopping-item');
    let listIndex = $(this).closest('li').index();
    checkItem(state, lineCheck, listIndex);


  });



});

//get user input value .... event listener submit
// push that value into the state
// render that value into the html
// event listers for checks
//event listenrs for deletes