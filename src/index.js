import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';

const ELItemCount = document.querySelector('.items-counter');

const build = async () => {
  const resolve = await API.getItemsList();
  const con = resolve.meals.length;
  ELItemCount.innerHTML = `${con} number of items`;
  DOM.createItems(resolve.meals);
};

window.addEventListener('load', () => {
  build();
});
