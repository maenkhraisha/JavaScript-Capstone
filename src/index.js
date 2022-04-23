import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5N1xL5GNxbBSdrn7etmt/comments';
const apiUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5N1xL5GNxbBSdrn7etmt/comments?item_id=item2';

let dynamicSection;
let cbList;
let nameInput, messageInput, innerButton, displyText, commentCountDiv, crossBtn;

const mainPopupImage = (id) => {
  document.querySelector(id);
  return id;
}; 


window.addEventListener('load', () => {
  API.getItemsList()
    .then((resolve) => {
      DOM.createItems(resolve.meals);
    }).then(() => {
      cbList = document.querySelectorAll('.btn-comment');
      cbList.forEach.call(cbList, (cb) => {
        cb.addEventListener('click', () => {
          
          mainPopupImage();
          
          const popUpWindow = document.createElement('div');
          popUpWindow.className = 'pop-up-window';

          crossBtn = document.createElement('h2');
          crossBtn.className = 'cross-btn';
          crossBtn.textContent = 'x';

          const mainImagePopup = document.createElement('img');
          mainImagePopup.src = 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg';
          mainImagePopup.className = 'popup-img';
          
          const h2 = document.createElement('h2');
          h2.textContent = 'About the image';

          const commentTitle = document.createElement('p');
          commentTitle.className = 'comment-title';
          commentTitle.textContent = 'Add a comment';

          nameInput = document.createElement('input');
          nameInput.type = 'text';
          nameInput.className = 'name-input-holder';

          messageInput = document.createElement('textarea');
          messageInput.className = 'text-area';

          innerButton = document.createElement('button');
          innerButton.className = 'inner-button';
          innerButton.textContent = 'Comment';

          commentCountDiv = document.createElement('div');
          commentCountDiv.className = 'comment-count-div';

          displyText = document.createElement('div');
          displyText.className = 'display-text';

          popUpWindow.appendChild(crossBtn);
          popUpWindow.appendChild(mainImagePopup);
          popUpWindow.appendChild(h2);
          popUpWindow.appendChild(commentCountDiv);
          popUpWindow.appendChild(displyText);
          popUpWindow.appendChild(commentTitle);
          popUpWindow.appendChild(nameInput);
          popUpWindow.appendChild(messageInput);
          popUpWindow.appendChild(innerButton);
          dynamicSection = document.querySelector('.test-dynami');
          dynamicSection.appendChild(popUpWindow);

          crossBtn.addEventListener('click', () => {
            popUpWindow.style.display = 'none';
          })

          getDataFromApi();
          innerButtonClickFunc();

        });

      });
    });
});

const getDataFromApi = async () => {
  await fetch(apiUrl2).then(response => response.json())
  .then(json => json.forEach((e) => {
    displyText.innerHTML = `<li> ${e.creation_date} ${e.username} : ${e.comment}`;
    commentCountDiv.textContent = `comments ${json.length}`;
  })
  );
};


const innerButtonClickFunc = async () => {
  innerButton.addEventListener('click', () => {
    if (!nameInput.value == '' || !messageInput.value == '') {
       fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: 'item2',
          username: nameInput.value,
          comment: messageInput.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    };
    getDataFromApi()
  });  
};













