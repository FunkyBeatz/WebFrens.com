import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import config from './config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import connectPgSimple from 'connect-pg-simple';
import pool from './db/index.js';
import helmet from 'helmet';

// Import routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import testimonialRoutes from './routes/testimonials.js';
import contactRoutes from './routes/contact.js';

const app = express();
const PORT = config.server.port;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google.com", "https://www.gstatic.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://www.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://www.google.com", "https://www.gstatic.com"],
      connectSrc: ["'self'", "https://www.google.com"],
      frameSrc: ["'self'", "https://www.google.com", "https://www.recaptcha.net"],
      fontSrc: ["'self'", "https://www.gstatic.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors({
  origin: config.server.nodeEnv === 'production' ? 'https://webfrens.com' : 'http://localhost:3000',
  credentials: true
}));

// Session configuration
const PgSession = connectPgSimple(session);
app.use(session({
  store: new PgSession({
    pool,
    tableName: 'user_sessions'
  }),
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: config.server.nodeEnv === 'production',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the client/dist directory
  app.use(express.static(join(__dirname, '../client/dist')));
  
  // Handle all other routes by serving the index.html
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', config.server.nodeEnv);
  console.log('Email configured for:', config.email.user);
});
