import 'lodash';
import './index.css';
import './index.html';
import 'boxicons';
import API from './module/API.js';
import DOM from './module/DOM.js';
// import { postData } from './module/involveApi.js';
// import { getItemFromApi} from './module/involveApi.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUchJcdqjG77aDKZUYlr/comments/';
const apiUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUchJcdqjG77aDKZUYlr/comments?item_id=item1'

let dynamicSection;
let cbList;
window.addEventListener('load', () => {
  API.getItemsList()
    .then((resolve) => {
      DOM.createItems(resolve.meals);
    }).then(() => {
      cbList = document.querySelectorAll('.btn-comment');
      cbList.forEach.call(cbList, (cb) => {
        cb.addEventListener('click', () => {
          const popUpWindow = document.createElement('div');
          popUpWindow.className = 'pop-up-window';

          const mainImagePopup = document.createElement('img');
          mainImagePopup.src = 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__480.jpg';
          mainImagePopup.className = 'popup-img';

          const h2 = document.createElement('h2');
          h2.textContent = 'About the image';

          const commentTitle = document.createElement('p');
          commentTitle.className = 'comment-title';
          commentTitle.textContent = 'Add a comment';

          const nameInput = document.createElement('input');
          nameInput.type = 'text';
          nameInput.classname = 'name-input-holder';

          const messageInput = document.createElement('textarea');
          messageInput.className = 'text-area';

          const innerButton = document.createElement('button');
          innerButton.className = 'inner-button';
          innerButton.textContent = 'Comment';

          const displyText = document.createElement('div');
          displyText.className = 'display-text';

          popUpWindow.appendChild(mainImagePopup);
          popUpWindow.appendChild(h2);
          popUpWindow.appendChild(displyText);
          popUpWindow.appendChild(commentTitle);
          popUpWindow.appendChild(nameInput);
          popUpWindow.appendChild(messageInput);
          popUpWindow.appendChild(innerButton);
          dynamicSection = document.querySelector('.test-dynami')
          dynamicSection.appendChild(popUpWindow);

          innerButton.addEventListener('click', () => {
            // commentButtonId = cbList.id;
            fetch(apiUrl, {
              method: 'POST',
              body: JSON.stringify({
                item_id: 'abc123',
                username: nameInput.value,
                comment: messageInput.value
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }).then((res) => console.log(res.status));

            const commentDataApi = fetch(apiUrl2).then(response => response.json())
            .then(json => displyText.append(json[0]));
            
           
            
            // console.log(commentDataApi);
            // commentDataApi.prototype.forEach.call((commentDataApi.item, (item) => {
            //  console.log(item)
          //  }));

          });

        });
      });
    });
});

// const getAllComments = async (id) => {
//   const allComments = await getComments(id);
//   commentCount.textContent = `Comments (${allComments.length})`;
//   commentList.innerHTML = '';
//   allComments.forEach((e) => {
//     commentList.innerHTML += `
//     <li>${e.creation_date}  ${e.username}:  ${e.comment}</li>
//     `;
//   });
// };











