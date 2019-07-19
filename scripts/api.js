'use strict';

// eslint-disable-next-line no-unused-vars
const api=(function (){
  const BASE_URL= 'https://thinkful-list-api.herokuapp.com/Vincent';
  
  const getItems = () => {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = (name) => {
    const newItem= JSON.stringify({ name: name });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newItem,
    });
  };

  const updateItem = (id, updateData) => {

  };

  return {
    getItems,
    createItem,
  };
})();

