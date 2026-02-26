import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'applications.db');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
    
    -- Status
    status TEXT DEFAULT 'PENDING',
    ai_analysis TEXT,
    ai_score INTEGER,
    ai_flags TEXT,
    review_notes TEXT,
    reviewed_by TEXT,
    reviewed_at TEXT,
    
    -- Plan
    plan_type TEXT NOT NULL,
    
    -- Primary Applicant
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date_of_birth TEXT NOT NULL,
    gender TEXT NOT NULL,
    ssn_last_four TEXT,
    
    -- Address
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    
    -- Health Info
    height TEXT,
    weight TEXT,
    tobacco_use INTEGER DEFAULT 0,
    
    -- Medical History (JSON)
    medical_conditions TEXT,
    current_medications TEXT,
    recent_treatments TEXT,
    
    -- Spouse
    spouse_first_name TEXT,
    spouse_last_name TEXT,
    spouse_dob TEXT,
    spouse_gender TEXT,
    
    -- Dependents (JSON array)
    dependents TEXT,
    
    -- Additional
    how_did_you_hear TEXT,
    additional_notes TEXT,
    
    -- Agreement
    agreed_to_terms INTEGER DEFAULT 0,
    agreed_to_guidelines INTEGER DEFAULT 0,
    signature TEXT,
    signature_date TEXT
  )
`);

export interface Application {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'PENDING' | 'AI_REVIEW' | 'NEEDS_REVIEW' | 'APPROVED' | 'DENIED';
  ai_analysis?: string;
  ai_score?: number;
  ai_flags?: string;
  review_notes?: string;
  reviewed_by?: string;
  reviewed_at?: string;
  plan_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  ssn_last_four?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  height?: string;
  weight?: string;
  tobacco_use: number;
  medical_conditions?: string;
  current_medications?: string;
  recent_treatments?: string;
  spouse_first_name?: string;
  spouse_last_name?: string;
  spouse_dob?: string;
  spouse_gender?: string;
  dependents?: string;
  how_did_you_hear?: string;
  additional_notes?: string;
  agreed_to_terms: number;
  agreed_to_guidelines: number;
  signature?: string;
  signature_date?: string;
}

export function createApplication(data: Omit<Application, 'id' | 'created_at' | 'updated_at'>): Application {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  
  const stmt = db.prepare(`
    INSERT INTO applications (
      id, created_at, updated_at, status, plan_type,
      first_name, last_name, email, phone, date_of_birth, gender, ssn_last_four,
      address, city, state, zip_code,
      height, weight, tobacco_use,
      medical_conditions, current_medications, recent_treatments,
      spouse_first_name, spouse_last_name, spouse_dob, spouse_gender,
      dependents, how_did_you_hear, additional_notes,
      agreed_to_terms, agreed_to_guidelines, signature, signature_date
    ) VALUES (
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?
    )
  `);
  
  stmt.run(
    id, now, now, data.status || 'PENDING', data.plan_type,
    data.first_name, data.last_name, data.email, data.phone, data.date_of_birth, data.gender, data.ssn_last_four,
    data.address, data.city, data.state, data.zip_code,
    data.height, data.weight, data.tobacco_use ? 1 : 0,
    data.medical_conditions, data.current_medications, data.recent_treatments,
    data.spouse_first_name, data.spouse_last_name, data.spouse_dob, data.spouse_gender,
    data.dependents, data.how_did_you_hear, data.additional_notes,
    data.agreed_to_terms ? 1 : 0, data.agreed_to_guidelines ? 1 : 0, data.signature, data.signature_date
  );
  
  return getApplication(id)!;
}

export function getApplication(id: string): Application | undefined {
  const stmt = db.prepare('SELECT * FROM applications WHERE id = ?');
  return stmt.get(id) as Application | undefined;
}

export function getAllApplications(): Application[] {
  const stmt = db.prepare('SELECT * FROM applications ORDER BY created_at DESC');
  return stmt.all() as Application[];
}

export function updateApplicationStatus(
  id: string, 
  status: Application['status'], 
  aiAnalysis?: string,
  aiScore?: number,
  aiFlags?: string
): Application | undefined {
  const now = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE applications 
    SET status = ?, ai_analysis = ?, ai_score = ?, ai_flags = ?, updated_at = ?
    WHERE id = ?
  `);
  stmt.run(status, aiAnalysis, aiScore, aiFlags, now, id);
  return getApplication(id);
}

export function reviewApplication(
  id: string,
  status: 'APPROVED' | 'DENIED' | 'NEEDS_REVIEW',
  reviewNotes: string,
  reviewedBy: string
): Application | undefined {
  const now = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE applications 
    SET status = ?, review_notes = ?, reviewed_by = ?, reviewed_at = ?, updated_at = ?
    WHERE id = ?
  `);
  stmt.run(status, reviewNotes, reviewedBy, now, now, id);
  return getApplication(id);
}

export function getApplicationStats() {
  const total = db.prepare('SELECT COUNT(*) as count FROM applications').get() as { count: number };
  const pending = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'PENDING' OR status = 'AI_REVIEW'").get() as { count: number };
  const needsReview = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'NEEDS_REVIEW'").get() as { count: number };
  const approved = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'APPROVED'").get() as { count: number };
  const denied = db.prepare("SELECT COUNT(*) as count FROM applications WHERE status = 'DENIED'").get() as { count: number };
  
  return {
    total: total.count,
    pending: pending.count,
    needsReview: needsReview.count,
    approved: approved.count,
    denied: denied.count,
  };
}

export default db;
