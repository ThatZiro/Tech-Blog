const { Post } = require('../models');

const postData = [
  {
    account_id: 1,
    title: 'Responsive Design',
    date: 'Nov 7',
    content: 'Master responsive design with CSS Grid and Flexbox for seamless web layouts. 💻🔗',
    tagline: '#WebDev #CSS',
  },
  {
    account_id: 2,
    title: 'React and Vue.js',
    date: 'Nov 7',
    content: 'JavaScript frameworks like React and Vue.js empower developers to build dynamic web apps. 🚀🌐 ',
    tagline: '#JavaScript #WebDevelopment',
  },
  {
    account_id: 3,
    title: 'Website Performance',
    date: 'Nov 8',
    content: 'Optimize website performance with lazy loading images and asynchronous JavaScript. ⚙️',
    tagline: '#WebPerformance #WebDev',
  },
  {
    account_id: 1,
    title: 'Techblogs are great!',
    date: 'Nov 9',
    content: 'Stay updated on the latest web development trends and tools by following tech blogs and forums.',
    tagline: '#TechTrends #WebDev',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
