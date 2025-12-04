export interface NavItem {
  label: string;
  link: string;
}

export interface JobPost {
  id: string;
  title: string;
  date: string;
  category: 'latest' | 'mp_vacancy' | 'private' | 'result' | 'admit_card';
  description?: string;
}

export interface TableRow {
  label: string;
  value: string | number;
  colSpan?: number;
}

export interface VacancyData {
  force: string;
  sc: number;
  st: number;
  obc: number;
  ews: number;
  ur: number;
}

export enum ViewState {
  HOME = 'HOME',
  JOB_DETAIL = 'JOB_DETAIL'
}