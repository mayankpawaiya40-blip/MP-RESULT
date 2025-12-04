import { NavItem, JobPost, VacancyData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'LATEST UPDATES', link: '#' },
  { label: 'MP SARKARI NAUKRI', link: '#' },
  { label: 'MP DISTRICT PRIVATE VACANCY', link: '#' },
  { label: 'RESULT', link: '#' },
  { label: 'ADMIT CARD', link: '#' },
  { label: 'ALL INDIA UPDATE', link: '#' },
  { label: 'SYLLABUS', link: '#' },
  { label: 'SEARCH', link: '#' },
];

export const LATEST_UPDATES: JobPost[] = [
  { id: '1', title: 'SSC GD Recruitment 2025 Apply Online (Post - 25487)', date: 'Dec 2, 2025', category: 'latest' },
  { id: '2', title: 'MP District Court Recruitment 2025', date: 'Dec 3, 2025', category: 'latest' },
  { id: '3', title: 'AIIMS Bhopal Faculty Recruitment 2025', date: 'Dec 1, 2025', category: 'latest' },
  { id: '4', title: 'SBI SCO Recruitment 2025', date: 'Nov 29, 2025', category: 'latest' },
  { id: '5', title: 'CTET Notification 2025', date: 'Nov 28, 2025', category: 'latest' },
];

export const MP_VACANCY: JobPost[] = [
  { id: '6', title: 'Dr Harisingh Gour University Sagar Recruitment', date: 'Dec 3, 2025', category: 'mp_vacancy' },
  { id: '7', title: 'MP District Court Recruitment 2025', date: 'Dec 2, 2025', category: 'mp_vacancy' },
  { id: '8', title: 'MP NHDC Apprentice Recruitment 2025', date: 'Dec 1, 2025', category: 'mp_vacancy' },
  { id: '9', title: 'MP NHM CMHO Recruitment 2025', date: 'Nov 30, 2025', category: 'mp_vacancy' },
];

export const PRIVATE_JOBS: JobPost[] = [
  { id: '10', title: 'Sanmati HS School Indore Jobs 2025', date: 'Dec 4, 2025', category: 'private' },
  { id: '11', title: 'Vinayak Group Ujjain Jobs 2025', date: 'Dec 3, 2025', category: 'private' },
  { id: '12', title: 'Hospital Gwalior Job Post - 618', date: 'Dec 2, 2025', category: 'private' },
  { id: '13', title: 'Agro Enterprises Sagar 2025', date: 'Dec 1, 2025', category: 'private' },
];

export const MALE_VACANCY_DATA: VacancyData[] = [
  { force: 'BSF', sc: 78, st: 58, obc: 113, ews: 53, ur: 222 },
  { force: 'CISF', sc: 1918, st: 1319, obc: 2958, ews: 1321, ur: 5547 },
  { force: 'CRPF', sc: 870, st: 32, obc: 1343, ews: 598, ur: 2523 },
  { force: 'SSB', sc: 257, st: 167, obc: 412, ews: 176, ur: 752 },
  { force: 'ITBR', sc: 146, st: 139, obc: 219, ews: 109, ur: 486 },
  { force: 'AR', sc: 161, st: 302, obc: 278, ews: 157, ur: 658 },
  { force: 'SSF', sc: 3, st: 2, obc: 6, ews: 2, ur: 10 },
];

export const FEMALE_VACANCY_DATA: VacancyData[] = [
  { force: 'BSF', sc: 11, st: 7, obc: 20, ews: 5, ur: 49 },
  { force: 'CISF', sc: 205, st: 152, obc: 326, ews: 150, ur: 627 },
  { force: 'CRPF', sc: 15, st: 8, obc: 27, ews: 8, ur: 66 },
  { force: 'SSB', sc: 0, st: 0, obc: 0, ews: 0, ur: 0 },
  { force: 'ITBR', sc: 24, st: 25, obc: 38, ews: 16, ur: 19 },
  { force: 'AR', sc: 14, st: 30, obc: 25, ews: 10, ur: 71 },
];