/* eslint comma-dangle: ["error", "never"] */

const LikeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9EwJcgG9IrTEsjQ0U1pz/likes/';

const getLikes = async () => {
  const request = new Request(LikeURL);
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

const addLike = async (itemID) => {
  const request = new Request(LikeURL);
  fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
};

export default { addLike, getLikes };
