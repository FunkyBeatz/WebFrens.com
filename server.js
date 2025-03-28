const express = require('express');
const cors = require('cors');
const { pool } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Get all resources with filtering
app.get('/api/resources', async (req, res) => {
  try {
    const { roleType, experience, skillLevel, skills, certifications, search } = req.query;
    
    let query = `
      SELECT DISTINCT r.*, 
        GROUP_CONCAT(DISTINCT s.name) as skills,
        GROUP_CONCAT(DISTINCT c.name) as certifications
      FROM resources r
      LEFT JOIN resource_skills rs ON r.id = rs.resource_id
      LEFT JOIN skills s ON rs.skill_id = s.id
      LEFT JOIN resource_certifications rc ON r.id = rc.resource_id
      LEFT JOIN certifications c ON rc.certification_id = c.id
      WHERE 1=1
    `;
    
    const params = [];
    
    if (roleType) {
      query += ' AND r.role_type = ?';
      params.push(roleType);
    }
    
    if (experience) {
      query += ' AND r.experience = ?';
      params.push(experience);
    }
    
    if (skillLevel) {
      query += ' AND r.skill_level = ?';
      params.push(skillLevel);
    }
    
    if (search) {
      query += ' AND (r.title LIKE ? OR r.description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }
    
    query += ' GROUP BY r.id';
    
    const [rows] = await pool.execute(query, params);
    
    const resources = rows.map(row => ({
      ...row,
      skills: row.skills ? row.skills.split(',').map(s => ({ name: s })) : [],
      certifications: row.certifications ? row.certifications.split(',').map(c => ({ name: c })) : []
    }));
    
    res.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

// Get all skills
app.get('/api/skills', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM skills ORDER BY name');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Get all certifications
app.get('/api/certifications', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM certifications ORDER BY name');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certifications' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
