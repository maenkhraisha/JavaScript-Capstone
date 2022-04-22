import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';
import Involvment from './module/involvment_API.js';

const addEventToIcon = () => {
  const iconList = document.querySelectorAll('.items-like-count');
  console.log(iconList);
  iconList.forEach.call(iconList, (icon) => {
    icon.addEventListener('click', () => {
      Involvment.addLike(icon.id);
      console.log('eee');
    });
  });
};
const load = () => {
  API.getItemsList().then((resolve) => {
    DOM.createItems(resolve.meals).then(() => {
      addEventToIcon();
    });
  });
};

window.addEventListener('load', () => {
  load();
});
