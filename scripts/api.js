'use strict';

const api=(function (){
  const BASE_URL= 'https://thinkful-list-api.herokuapp.com/Vincent'
  function getItems() {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(resJson => console.log(resJson));
  }
    function createItem (name) {
      const newItem= JSON.stringify({ name: name })
      return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: newItem,
      })
    }
    return {
    getItems,
    createItem,
  };
})();

