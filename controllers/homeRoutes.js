const router = require('express').Router();
const { Account, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: Comment,
        include: Account,
      },
      include: [{ model: Account, attributes: ['username'] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.trace(req.session);
    // console.trace(posts[0].comments);
    res.render('homeblog', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// users dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { account_id: req.session.user_id },
      include: [{ model: Account, attributes: ['username'] }],
    });

    if (!postData.length) {
      res.render('newpost', {
        logged_in: req.session.logged_in,
      });
    } else {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('dashboard', {
        posts,
        logged_in: req.session.logged_in,
        show_edit: true,
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// view selcted post
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: Account, attributes: ['username'] },
        {
          model: Comment,
          include: [{ model: Account, attributes: ['username'] }],
        },
      ],
    });

    const post = postData.get({ plain: true });
    let show_edit = false;
    if ((post.account_id = req.session.id)) {
      show_edit = true;
    }

    res.render('postpage', {
      ...post,
      logged_in: req.session.logged_in,
      show_comments: true,
      show_edit,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new post form
router.get('/newpost', withAuth, (req, res) => {
  try {
    res.render('newpost', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit specific post form
router.get('/edit-post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: Account, attributes: ['username'] },
        {
          model: Comment,
          include: [{ model: Account, attributes: ['username'] }],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('loginmenu');
});

router.get('/register', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('registermenu');
});

module.exports = router;
