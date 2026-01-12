import Database from 'better-sqlite3';
import path from 'path';

const db = new Database('projects.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tech TEXT NOT NULL,
    link TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    hits INTEGER DEFAULT 1,
    last_visited DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS system_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    action TEXT NOT NULL,
    details TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

try {
  db.exec('ALTER TABLE projects ADD COLUMN image TEXT');
} catch (e) {
  // Column already exists
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export const logAction = (action: string, details: string = '') => {
  const stmnt = db.prepare('INSERT INTO system_logs (action, details) VALUES (?, ?)');
  return stmnt.run(action, details);
};

export const getStats = () => {
  const projectCount = db.prepare('SELECT COUNT(*) as count FROM projects').get() as { count: number };
  const totalHits = db.prepare('SELECT SUM(hits) as count FROM analytics').get() as { count: number };
  const recentLogs = db.prepare('SELECT * FROM system_logs ORDER BY timestamp DESC LIMIT 5').all();
  
  return {
    projects: projectCount.count,
    views: totalHits.count || 0,
    logs: recentLogs
  };
};

export const trackVisit = (path: string) => {
  const exists = db.prepare('SELECT * FROM analytics WHERE path = ?').get(path);
  if (exists) {
    db.prepare('UPDATE analytics SET hits = hits + 1, last_visited = CURRENT_TIMESTAMP WHERE path = ?').run(path);
  } else {
    db.prepare('INSERT INTO analytics (path, hits) VALUES (?, 1)').run(path);
  }
};

export const getProjects = (): Project[] => {
  const stmnt = db.prepare('SELECT * FROM projects ORDER BY created_at DESC');
  const rows = stmnt.all() as any[];
  return rows.map(row => ({
    ...row,
    tech: JSON.parse(row.tech)
  }));
};

export const getProjectById = (id: number): Project | undefined => {
  const stmnt = db.prepare('SELECT * FROM projects WHERE id = ?');
  const row = stmnt.get(id) as any;
  if (!row) return undefined;
  return {
    ...row,
    tech: JSON.parse(row.tech)
  };
};

export const addProject = (project: Omit<Project, 'id'>) => {
  const stmnt = db.prepare('INSERT INTO projects (title, description, tech, link, image) VALUES (?, ?, ?, ?, ?)');
  return stmnt.run(project.title, project.description, JSON.stringify(project.tech), project.link, project.image || '');
};

export const updateProject = (id: number, project: Partial<Project>) => {
  const keys = Object.keys(project).filter(k => k !== 'id');
  if (keys.length === 0) return;

  const setClause = keys.map(k => `${k} = ?`).join(', ');
  const values = keys.map(k => {
    const val = (project as any)[k];
    return Array.isArray(val) ? JSON.stringify(val) : val;
  });

  const stmnt = db.prepare(`UPDATE projects SET ${setClause} WHERE id = ?`);
  return stmnt.run(...values, id);
};

export const deleteProject = (id: number) => {
  const stmnt = db.prepare('DELETE FROM projects WHERE id = ?');
  return stmnt.run(id);
};
