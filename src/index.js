import 'lodash';
import './index.css';
import './index.html';
import API from './module/API.js';

window.addEventListener('load', () => {
  API.getItemsList()
    .then((resolve) => {
      console.log(resolve[514]);
    });
});