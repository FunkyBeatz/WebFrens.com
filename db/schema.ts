import { pgTable, text, serial, integer, boolean, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

// Existing users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
});

// Resources table
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  roleType: varchar("role_type", { length: 50 }).notNull(),
  experience: varchar("experience", { length: 20 }),
  skillLevel: varchar("skill_level", { length: 20 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Certifications table
export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).unique().notNull(),
});

// Skills table
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).unique().notNull(),
});

// Junction table for resources and certifications
export const resourceCertifications = pgTable("resource_certifications", {
  id: serial("id").primaryKey(),
  resourceId: integer("resource_id").references(() => resources.id).notNull(),
  certificationId: integer("certification_id").references(() => certifications.id).notNull(),
});

// Junction table for resources and skills
export const resourceSkills = pgTable("resource_skills", {
  id: serial("id").primaryKey(),
  resourceId: integer("resource_id").references(() => resources.id).notNull(),
  skillId: integer("skill_id").references(() => skills.id).notNull(),
});

// Relations
export const resourcesRelations = relations(resources, ({ many }) => ({
  certifications: many(resourceCertifications),
  skills: many(resourceSkills),
}));

export const certificationsRelations = relations(certifications, ({ many }) => ({
  resources: many(resourceCertifications),
}));

export const skillsRelations = relations(skills, ({ many }) => ({
  resources: many(resourceSkills),
}));

// Schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertResourceSchema = createInsertSchema(resources);
export const selectResourceSchema = createSelectSchema(resources);

export const insertCertificationSchema = createInsertSchema(certifications);
export const selectCertificationSchema = createSelectSchema(certifications);

export const insertSkillSchema = createInsertSchema(skills);
export const selectSkillSchema = createSelectSchema(skills);

// Types
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertResource = typeof resources.$inferInsert;
export type SelectResource = typeof resources.$inferSelect;

export type InsertCertification = typeof certifications.$inferInsert;
export type SelectCertification = typeof certifications.$inferSelect;

export type InsertSkill = typeof skills.$inferInsert;
export type SelectSkill = typeof skills.$inferSelect;