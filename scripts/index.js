'use strict';

/* global shoppingList, store, Item, $, api */
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});



//test stuff

fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));