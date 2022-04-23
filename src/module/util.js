const getLikesNoByID = (itemID, likesArray) => {
  for (let i = 0; i < likesArray.length; i += 1) {
    if (likesArray[i].item_id === itemID) {
      return likesArray[i].likes;
    }
  }
  return 0;
};

module.exports = getLikesNoByID;