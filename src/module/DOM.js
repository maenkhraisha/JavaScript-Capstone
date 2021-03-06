import involvmentAPI from './involvment_API.js';
import getLikesNoByID from './util.js';

const ELMainSection = document.querySelector('.items-list');
const ELContainer = document.createElement('div');
ELContainer.className = 'items-container';
ELMainSection.appendChild(ELContainer);

const buildList = (itemsList, likesArray) => {
  itemsList.forEach((item) => {
    const ELItem = document.createElement('div');
    ELItem.className = 'items';

    const ELImg = document.createElement('img');
    ELImg.src = item.strMealThumb;
    ELImg.className = 'items-image';

    const ELTitle = document.createElement('h3');
    ELTitle.innerText = item.strMeal;
    ELTitle.className = 'items-title';

    const ELImgHeart = document.createElement('box-icon');
    ELImgHeart.setAttribute('name', 'heart');
    ELImgHeart.setAttribute('id', item.idMeal);
    ELImgHeart.className = 'icon-heart';

    const ELLikeCount = document.createElement('h5');
    const likeCount = getLikesNoByID(item.idMeal, likesArray);
    ELLikeCount.innerText = `${likeCount} Likes`;
    ELLikeCount.setAttribute('id', item.itemID);
    ELLikeCount.className = 'items-like-count';

    const ELBtnComment = document.createElement('button');
    ELBtnComment.className = 'btn btn-comment';
    ELBtnComment.innerText = 'Comment';

    const ELBtnReservation = document.createElement('button');
    ELBtnReservation.className = 'btn btn-reservation';
    ELBtnReservation.innerText = 'Reservation';

    ELItem.appendChild(ELImg);
    ELItem.appendChild(ELTitle);
    ELItem.appendChild(ELImgHeart);
    ELItem.appendChild(ELLikeCount);
    ELItem.appendChild(ELBtnComment);
    ELItem.appendChild(ELBtnReservation);
    ELContainer.appendChild(ELItem);
  });
};

const createItems = (itemsList) => {
  let likesArray;
  involvmentAPI.getLikes()
    .then((resolve) => {
      likesArray = resolve;
    }).then(() => {
      buildList(itemsList, likesArray);
    }).then(() => {
      const iconList = document.querySelectorAll('.icon-heart');
      iconList.forEach.call(iconList, (icon) => {
        icon.addEventListener('click', () => {
          involvmentAPI.addLike(icon.id);
          const LikesNo = `${getLikesNoByID(icon.id, likesArray) + 1} Likes`;
          icon.nextElementSibling.innerText = LikesNo;
        });
      });
    });
};

export default { createItems };