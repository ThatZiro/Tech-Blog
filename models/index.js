// import models
const Account = require('./Account');
const Post = require('./Post');
const Comment = require('./Comment');

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
});

Comment.belongsTo(Account, {
  foreignKey: 'account_id',
  onDelete: 'cascade',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Post.belongsTo(Account, {
  foreignKey: 'account_id',
});

Account.hasMany(Post, {
  foreignKey: 'account_id',
});

Account.hasMany(Comment, {
  foreignKey: 'account_id',
});

module.exports = {
  Account,
  Post,
  Comment,
};
