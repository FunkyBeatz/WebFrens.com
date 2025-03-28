import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { hash, compare } from 'bcrypt';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const router = express.Router();

// Passport local strategy setup
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.username, username)
    });

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    const isValid = await compare(password, user.password);
    if (!isValid) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, id)
    });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Routes
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hash(password, 10);
    
    const newUser = await db.insert(users).values({
      username,
      password: hashedPassword,
      email
    }).returning();

    res.json(newUser[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logged out successfully' });
  });
});

router.get('/me', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

export default router; 