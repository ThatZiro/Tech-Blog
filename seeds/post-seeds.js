const { Post } = require('../models');

const postData = [
  {
    account_id: 1,
    content: 'Master responsive design with CSS Grid and Flexbox for seamless web layouts. 💻🔗',
    tagline: '#WebDev #CSS',
  },
  {
    account_id: 2,
    content: 'JavaScript frameworks like React and Vue.js empower developers to build dynamic web apps. 🚀🌐 ',
    tagline: '#JavaScript #WebDevelopment',
  },
  {
    account_id: 3,
    content: 'Optimize website performance with lazy loading images and asynchronous JavaScript. ⚙️',
    tagline: '#WebPerformance #WebDev',
  },
  {
    account_id: 1,
    content: 'Stay updated on the latest web development trends and tools by following tech blogs and forums.',
    tagline: '#TechTrends #WebDev',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
