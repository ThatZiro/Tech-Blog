const { Comment } = require('../models');

const commentData = [
  {
    owner_id: 1,
    post_id: 1,
    content: 'First Account posting on First Post!',
  },
  {
    owner_id: 2,
    post_id: 2,
    content: 'Second Account posting on Second Post!',
  },
  {
    owner_id: 1,
    post_id: 3,
    content: 'First Account posting on Third Post!',
  },
  {
    owner_id: 3,
    post_id: 1,
    content: 'Third Account posting on First Post!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
