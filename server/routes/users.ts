import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import type { User } from '../db/schema.js';

interface AuthenticatedRequest extends Request {
  user?: User;
}

const router = Router();

// Middleware to check if user is authenticated
const isAuthenticated = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Not authenticated' });
};

// Get user profile
router.get('/profile', isAuthenticated, async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, req.user.id),
      columns: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/profile', isAuthenticated, async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: 'User not found' });
    }

    const { email } = req.body;
    const updatedUser = await db
      .update(users)
      .set({ email })
      .where(eq(users.id, req.user.id))
      .returning();
    res.json(updatedUser[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router; 