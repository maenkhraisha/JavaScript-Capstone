import { divide } from "lodash";

const url =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mWj4kNEnquggMkAWBQrw/likes/'

// const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mWj4kNEnquggMkAWBQrw/comments?item_id=item1'

const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mWj4kNEnquggMkAWBQrw/comments'

// [
//     {
//       "likes": 1,
//       "item_id": "item1"
//     }
//   ]

// [
//     {
//       "comment": "Hello",
//       "username": "Jane",
//       "creation_date": "2022-04-19"
//     }
//   ]
const dynamicSection = document.querySelector('.test-dynami')
const addCommentButton = document.querySelector('.add-comment');
 export const dynamicFunction = addCommentButton.addEventListener('click', () => {
    const popUpWindow = document.createElement('div');
    popUpWindow.className = 'pop-up-window';
    const commentTitle = document.createElement('p');
    commentTitle.className = 'comment-title';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classname  = 'name-input-holder';
    const messageInput = document.createElement('input');
    messageInput.type = 'textarea';
    messageInput.className = 'text-area';
    const innerButton = document.createElement('button');
    innerButton.className = 'inner-button';
    const displyText = document.createElement('div');
    displyText.className = 'display-text';
    popUpWindow.append(commentTitle, nameInput,messageInput, innerButton, displyText);
    dynamicSection.appendChild(popUpWindow);   
    fetch(url2, {
        method: 'POST',
        body: JSON.stringify({
            item_id: 'item1',
            comment: messageInput.value,
            username: nameInput.value,
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json()); 
})

