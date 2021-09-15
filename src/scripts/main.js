'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  for (const key in data) {
    if (Object.values(data[key]).length > 1) {
      const item = document.createElement('li');

      item.textContent = key;

      const list = document.createElement('ul');

      item.append(list);
      element.append(item);

      createTree(list, data[key]);
    } else {
      const listItem = document.createElement('li');

      listItem.textContent = key;
      element.append(listItem);
    }
  }
}

createTree(tree, food);
