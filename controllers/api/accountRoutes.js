const router = require('express').Router();
const { Account } = require('../../models');

// Create a user
router.post('/', async (req, res) => {
  console.trace('account submitted');
  try {
    const accountData = await Account.create(req.body);

    req.session.save(() => {
      req.session.user_id = accountData.id;
      req.session.logged_in = true;

      res.status(200).json(accountData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.trace(req.body);
  try {
    console.trace('Test');
    const accountData = await Account.findOne({ where: { username: req.body.username } });

    if (!accountData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await accountData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = accountData.id;
      req.session.logged_in = true;

      res.json({ account: accountData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
