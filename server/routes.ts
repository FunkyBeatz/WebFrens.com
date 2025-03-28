import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";
import { db } from "@db";
import { eq, and, or, ilike } from "drizzle-orm";
import { 
  resources,
  skills,
  certifications,
  resourceSkills,
  resourceCertifications
} from "@db/schema";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const resourceFilterSchema = z.object({
  roleType: z.string().optional(),
  experience: z.string().optional(),
  certifications: z.array(z.string()).optional(),
  skillLevel: z.string().optional(),
  skills: z.array(z.string()).optional(),
  search: z.string().optional(),
});

export function registerRoutes(app: Express): Server {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Get all resources with optional filtering
  app.get("/api/resources", async (req, res) => {
    try {
      const filters = resourceFilterSchema.parse(req.query);

      // Build where conditions
      const conditions = [];

      if (filters.roleType) {
        conditions.push(eq(resources.roleType, filters.roleType));
      }

      if (filters.experience) {
        conditions.push(eq(resources.experience, filters.experience));
      }

      if (filters.skillLevel) {
        conditions.push(eq(resources.skillLevel, filters.skillLevel));
      }

      if (filters.search) {
        conditions.push(
          or(
            ilike(resources.title, `%${filters.search}%`),
            ilike(resources.description, `%${filters.search}%`)
          )
        );
      }

      const results = await db.select({
        id: resources.id,
        title: resources.title,
        description: resources.description,
        roleType: resources.roleType,
        experience: resources.experience,
        skillLevel: resources.skillLevel,
      }).from(resources)
        .where(and(...conditions));

      // Fetch related skills and certifications with their names
      const resourcesWithRelations = await Promise.all(
        results.map(async (resource) => {
          const resourceSkillsData = await db
            .select({
              name: skills.name,
            })
            .from(resourceSkills)
            .innerJoin(skills, eq(skills.id, resourceSkills.skillId))
            .where(eq(resourceSkills.resourceId, resource.id));

          const resourceCertsData = await db
            .select({
              name: certifications.name,
            })
            .from(resourceCertifications)
            .innerJoin(certifications, eq(certifications.id, resourceCertifications.certificationId))
            .where(eq(resourceCertifications.resourceId, resource.id));

          return {
            ...resource,
            skills: resourceSkillsData,
            certifications: resourceCertsData,
          };
        })
      );

      res.json(resourcesWithRelations);
    } catch (error) {
      console.error("Error fetching resources:", error);
      res.status(500).json({ 
        error: "Failed to fetch resources",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Update skills endpoint to return full skill objects
  app.get("/api/skills", async (_req, res) => {
    try {
      const allSkills = await db
        .select({
          id: skills.id,
          name: skills.name,
        })
        .from(skills)
        .orderBy(skills.name);
      res.json(allSkills);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch skills",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Update certifications endpoint to return full certification objects
  app.get("/api/certifications", async (_req, res) => {
    try {
      const allCertifications = await db
        .select({
          id: certifications.id,
          name: certifications.name,
        })
        .from(certifications)
        .orderBy(certifications.name);
      res.json(allCertifications);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch certifications",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Existing contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "info@webfrens.com",
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
        `,
      });

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}