import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Testimonial } from '../../../types/testimonial';

const PENDING_TESTIMONIALS_PATH = path.join(process.cwd(), 'data', 'pending-testimonials.json');
const APPROVED_TESTIMONIALS_PATH = path.join(process.cwd(), 'data', 'testimonials.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { action } = req.query;
  const { testimonialId } = req.body;

  if (!testimonialId) {
    return res.status(400).json({ message: 'Testimonial ID is required' });
  }

  try {
    // Read pending testimonials
    let pendingTestimonials: Testimonial[] = [];
    try {
      const fileContent = await fs.readFile(PENDING_TESTIMONIALS_PATH, 'utf-8');
      pendingTestimonials = JSON.parse(fileContent);
    } catch (error) {
      pendingTestimonials = [];
    }

    // Find the testimonial to approve/reject
    const testimonialIndex = pendingTestimonials.findIndex(t => t.id === testimonialId);
    if (testimonialIndex === -1) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    const testimonial = pendingTestimonials[testimonialIndex];

    if (action === 'approve') {
      // Read existing approved testimonials
      let approvedTestimonials: Testimonial[] = [];
      try {
        const fileContent = await fs.readFile(APPROVED_TESTIMONIALS_PATH, 'utf-8');
        approvedTestimonials = JSON.parse(fileContent);
      } catch (error) {
        approvedTestimonials = [];
      }

      // Add to approved testimonials
      testimonial.verified = true;
      testimonial.status = 'approved';
      approvedTestimonials.push(testimonial);

      // Save approved testimonials
      await fs.writeFile(
        APPROVED_TESTIMONIALS_PATH,
        JSON.stringify(approvedTestimonials, null, 2)
      );
    }

    // Remove from pending testimonials
    pendingTestimonials.splice(testimonialIndex, 1);
    await fs.writeFile(
      PENDING_TESTIMONIALS_PATH,
      JSON.stringify(pendingTestimonials, null, 2)
    );

    res.status(200).json({ 
      message: `Testimonial ${action === 'approve' ? 'approved' : 'rejected'} successfully` 
    });
  } catch (error) {
    console.error(`Error ${action}ing testimonial:`, error);
    res.status(500).json({ message: `Failed to ${action} testimonial` });
  }
} 