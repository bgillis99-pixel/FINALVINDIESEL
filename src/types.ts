export enum AppView {
  HOME = 'home',
  ASSISTANT = 'assistant',
  ANALYZE = 'analyze',
  PROFILE = 'profile',
  ADMIN = 'admin'
  HOME = 'HOME',
  ASSISTANT = 'ASSISTANT',
  ANALYZE = 'ANALYZE',
  PROFILE = 'PROFILE',
  ADMIN = 'ADMIN'
}

export interface HistoryItem {
  id: string;
  value: string;
  type: 'VIN' | 'ENTITY' | 'TRUCRS';
  timestamp: number;
}

export interface User {
  email: string;
  history: HistoryItem[];
}

export interface ComplianceResult {
  vin: string;
  status: 'compliant' | 'non-compliant' | 'unknown';
  message: string;
  details?: string[];
}
