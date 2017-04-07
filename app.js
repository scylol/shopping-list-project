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
var checkItem = function(state,item,itemIndex) {
    state.items[itemIndex].checked = !state.items[itemIndex].checked;
    item.toggleClass('shopping-item__checked');
};
var editItem = function(state,item,itemIndex) {
    state.items[itemIndex].name = item;
}
var toggleHide = function(target){
        target.toggleClass('hidden');
  };
  
//  let filtered = state.items.filter(function(item){
//      return item.checked === true;
//  })
  //When toggleHIde is clicked, check for all items that are checked
  // then only rem
  //return an array of indexes that are checked
  //access the index of the items using closest('li')
  // if checked = true hide it
  //use .css() to add a property to the 'checked' dispaly:none

//render function

var renderList = function(state, element) {
  
   
      var itemsHTML = state.items.map(function(item) {
         if(item.checked === false){
        return `<li>
        <span class="shopping-item"> ${item.name} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
          <button class="shopping-item-edit">
            <span class="button-label">edit</span>
          </button>
          <input type="text" name="edit-shopping-list-entry" id="edit-shopping-list-entry" placeholder="edit entry">
          

    
        </div>
      </li>`
      }})
      element.html(itemsHTML);
      }

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
      
      let index = $(this).closest('li').index();
      deleteItem(state,index);
      renderList(state, shoppingList);

	});
    
	$('.shopping-list').on('click', '.shopping-item-toggle', function(){

    let lineCheck = $(this).closest('li').children('.shopping-item');
    let listIndex = $(this).closest('li').index();
    checkItem(state, lineCheck, listIndex);


  });

  $('.shopping-list').on('click', '.shopping-item-edit', function(){
    let newValue = $('#edit-shopping-list-entry').val();
    let newValueIndex = $(this).closest('li').index();
    editItem(state,newValue, newValueIndex);
    renderList(state, shoppingList);
  });
  $('.show-checked-toggle').on('click', function(){
   let target = $('.shopping-item__checked');
   toggleHide(target);
   renderList(state, shoppingList);
  })

});

//get user input value .... event listener submit
// push that value into the state
// render that value into the html
// event listers for checks
//event listenrs for deletes