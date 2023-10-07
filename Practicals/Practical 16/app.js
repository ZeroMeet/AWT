const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find((u) => u.username === username);
  if (!user || user.password !== password) {
    return done(null, false, { message: 'Incorrect username or password' });
  }
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
}));

app.get('/profile', isAuthenticated, (req, res) => {
  res.send(`Welcome, ${req.user.username}!`);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


app.get('/register', (req, res) => {
  res.send('Registration Page');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).send('User already exists.');
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.redirect('/login');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
