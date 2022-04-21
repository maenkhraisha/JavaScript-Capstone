import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';
import Involvment from './module/involvment_API.js';

window.addEventListener('load', () => {
  API.getItemsList()
    .then((resolve) => {
      DOM.createItems(resolve.meals);
    }).then(() => {
      const iconList = document.querySelectorAll('.icon-heart');
      iconList.forEach.call(iconList, (icon) => {
        icon.addEventListener('click', () => {
          Involvment.addLike(icon.id);
          console.log(icon.id);
        });
      });
    });
});
