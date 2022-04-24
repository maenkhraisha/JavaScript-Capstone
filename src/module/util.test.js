const getLikesNoByID = require('./util.js');

it('work', () => {
  expect(getLikesNoByID('52819',
    [
      { item_id: '52819', likes: 17 },
      { item_id: '52802', likes: 2 },
      { item_id: '52946', likes: 1 },
      { item_id: '52960', likes: 1 },
      { item_id: '52944', likes: 10 },
    ])).toBe(17);
});