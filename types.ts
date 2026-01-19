
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: string;
}

export interface ScentResult {
  archetype: string;
  coreNeed: 'Restart' | 'Recharge';
  insight: string;
  scentName: string;
  scentNotes: string[];
  scentDescription: string;
  recommendedActivity: string;
  productRecommendation: string;
  productUrl: string;
}

// Added UserData interface to support the LeadForm component
export interface UserData {
  name: string;
  phone: string;
  email: string;
}

export enum AppStatus {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT'
}
