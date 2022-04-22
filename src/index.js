import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';

const build = async () => {
  const resolve = await API.getItemsList();
  DOM.createItems(resolve.meals);
};

window.addEventListener('load', () => {
  build();
});
