export enum AppView {
  HOME = 'HOME',
  ASSISTANT = 'ASSISTANT',
  ANALYZE = 'ANALYZE',
  PROFILE = 'PROFILE',
  ADMIN = 'ADMIN'
}

export interface HistoryItem {
  id: string;
  value: string;
  type: 'VIN' | 'ENTITY';
  timestamp: number;
}

export interface User {
  email: string;
  history: HistoryItem[];
}
