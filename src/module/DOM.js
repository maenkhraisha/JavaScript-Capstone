const ELMainSection = document.querySelector('.items-list');
const ELContainer = document.createElement('div');
ELContainer.className = 'items-container';
ELMainSection.appendChild(ELContainer);

const createItems = (itemsList) => {
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
    ELLikeCount.innerText = '0 Likes';
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

export default { createItems };