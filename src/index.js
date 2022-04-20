import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';

let dynamicSection;
let cbList;
window.addEventListener('load', () => {
  API.getItemsList()
    .then((resolve) => {
      DOM.createItems(resolve.meals);
    }).then(() => {
      cbList = document.querySelectorAll('.btn-comment');
      cbList.forEach.call(cbList, (cb) => {
        cb.addEventListener('click',() => {
          const popUpWindow = document.createElement('div');
          popUpWindow.className = 'pop-up-window';

          const mainImagePopup = document.createElement('img');
          mainImagePopup.src = 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg';
          mainImagePopup.className = 'popup-img';

          const h2 = document.createElement('h2');
          h2.textContent = 'About the image';

          const commentTitle = document.createElement('p');
          commentTitle.className = 'comment-title';
          commentTitle.textContent = 'Add a comment';

          const nameInput = document.createElement('input');
          nameInput.type = 'text';
          nameInput.classname  = 'name-input-holder';

          const messageInput = document.createElement('textarea');
          messageInput.className = 'text-area';

          const innerButton = document.createElement('button');
          innerButton.className = 'inner-button';
          innerButton.textContent = 'Comment';

          const displyText = document.createElement('div');
          displyText.className = 'display-text';

          // popUpWindow.appendChild(commentTitle, nameInput, messageInput, innerButton, displyText);
          // dynamicSection.appendChild(popUpWindow); 
          
          popUpWindow.appendChild(mainImagePopup);
          popUpWindow.appendChild(h2);
          popUpWindow.appendChild(commentTitle);
          popUpWindow.appendChild(nameInput);
          popUpWindow.appendChild(messageInput);
          popUpWindow.appendChild(innerButton);
          dynamicSection = document.querySelector('.test-dynami')
          dynamicSection.appendChild(popUpWindow);
            
        });
        });
    });
});




  