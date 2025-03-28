-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS discord_resource_platform;
USE discord_resource_platform;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  role_type VARCHAR(50) NOT NULL,
  experience VARCHAR(20),
  skill_level VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Certifications table
CREATE TABLE IF NOT EXISTS certifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

-- Junction table for resources and certifications
CREATE TABLE IF NOT EXISTS resource_certifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  resource_id INT NOT NULL,
  certification_id INT NOT NULL,
  FOREIGN KEY (resource_id) REFERENCES resources(id),
  FOREIGN KEY (certification_id) REFERENCES certifications(id)
);

-- Junction table for resources and skills
CREATE TABLE IF NOT EXISTS resource_skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  resource_id INT NOT NULL,
  skill_id INT NOT NULL,
  FOREIGN KEY (resource_id) REFERENCES resources(id),
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

-- Insert sample data
INSERT INTO skills (name) VALUES 
('Node.js'),
('React'),
('TypeScript'),
('Python'),
('Community Management'),
('Content Strategy'),
('Leadership'),
('Communication'),
('Technical Writing'),
('Web3.js'),
('Blockchain'),
('Smart Contracts'),
('Basic Discord');

INSERT INTO certifications (name) VALUES
('AWS Certification'),
('Discord Moderator Certification'),
('Blockchain Developer Certification'),
('Community Management Certification'),
('Web3 Security Certification');
