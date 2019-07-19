'use strict';

const api=(function (){
  const BASE_URL= 'https://thinkful-list-api.herokuapp.com/Vincent'
  function getItems() {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(resJson => console.log(resJson));
  }
  return {
    getItems,
  };
})();