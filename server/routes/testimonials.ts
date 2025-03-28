import { Router } from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { Testimonial } from '../../src/types/testimonial';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PENDING_TESTIMONIALS_PATH = path.join(__dirname, '../../data/pending-testimonials.json');
const APPROVED_TESTIMONIALS_PATH = path.join(__dirname, '../../data/testimonials.json');

const router = Router();

// Get pending testimonials
router.get('/pending', async (req, res) => {
  try {
    let pendingTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(PENDING_TESTIMONIALS_PATH, 'utf-8');
      pendingTestimonials = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, return empty array
      pendingTestimonials = [];
    }
    res.json(pendingTestimonials);
  } catch (error) {
    console.error('Error getting pending testimonials:', error);
    res.status(500).json({ message: 'Failed to get pending testimonials' });
  }
});

// Get approved testimonials
router.get('/approved', async (req, res) => {
  try {
    let approvedTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(APPROVED_TESTIMONIALS_PATH, 'utf-8');
      approvedTestimonials = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, return empty array
      approvedTestimonials = [];
    }
    res.json(approvedTestimonials);
  } catch (error) {
    console.error('Error getting approved testimonials:', error);
    res.status(500).json({ message: 'Failed to get approved testimonials' });
  }
});

// Submit new testimonial
router.post('/submit', async (req, res) => {
  try {
    // Create data directory if it doesn't exist
    await fs.mkdir(path.join(__dirname, '../../data'), { recursive: true });

    // Read existing pending testimonials
    let pendingTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(PENDING_TESTIMONIALS_PATH, 'utf-8');
      pendingTestimonials = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      pendingTestimonials = [];
    }

    // Add new testimonial
    const newTestimonial: Testimonial = {
      ...req.body,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      verified: false,
      status: 'pending'
    };
    pendingTestimonials.push(newTestimonial);

    // Save updated pending testimonials
    await fs.writeFile(
      PENDING_TESTIMONIALS_PATH,
      JSON.stringify(pendingTestimonials, null, 2)
    );

    res.status(200).json({ message: 'Testimonial submitted successfully' });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    res.status(500).json({ message: 'Failed to submit testimonial' });
  }
});

// Approve testimonial
router.post('/approve/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Read pending testimonials
    let pendingTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(PENDING_TESTIMONIALS_PATH, 'utf-8');
      pendingTestimonials = JSON.parse(fileContent);
    } catch (error) {
      pendingTestimonials = [];
    }

    // Find testimonial to approve
    const testimonialIndex = pendingTestimonials.findIndex(t => t.id === id);
    if (testimonialIndex === -1) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    // Move testimonial from pending to approved
    const testimonial = pendingTestimonials[testimonialIndex];
    testimonial.verified = true;
    testimonial.status = 'approved';

    // Remove from pending
    pendingTestimonials.splice(testimonialIndex, 1);
    await fs.writeFile(
      PENDING_TESTIMONIALS_PATH,
      JSON.stringify(pendingTestimonials, null, 2)
    );

    // Add to approved
    let approvedTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(APPROVED_TESTIMONIALS_PATH, 'utf-8');
      approvedTestimonials = JSON.parse(fileContent);
    } catch (error) {
      approvedTestimonials = [];
    }
    approvedTestimonials.push(testimonial);
    await fs.writeFile(
      APPROVED_TESTIMONIALS_PATH,
      JSON.stringify(approvedTestimonials, null, 2)
    );

    res.json({ message: 'Testimonial approved successfully' });
  } catch (error) {
    console.error('Error approving testimonial:', error);
    res.status(500).json({ message: 'Failed to approve testimonial' });
  }
});

// Reject testimonial
router.post('/reject/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Read pending testimonials
    let pendingTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(PENDING_TESTIMONIALS_PATH, 'utf-8');
      pendingTestimonials = JSON.parse(fileContent);
    } catch (error) {
      pendingTestimonials = [];
    }

    // Find and remove testimonial
    const testimonialIndex = pendingTestimonials.findIndex(t => t.id === id);
    if (testimonialIndex === -1) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    pendingTestimonials.splice(testimonialIndex, 1);
    await fs.writeFile(
      PENDING_TESTIMONIALS_PATH,
      JSON.stringify(pendingTestimonials, null, 2)
    );

    res.json({ message: 'Testimonial rejected successfully' });
  } catch (error) {
    console.error('Error rejecting testimonial:', error);
    res.status(500).json({ message: 'Failed to reject testimonial' });
  }
});

export default router; 