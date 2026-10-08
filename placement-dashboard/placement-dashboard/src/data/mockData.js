export const jobs = [
  { id: 1, company: 'TCS', role: 'Systems Engineer', type: 'Full-time', location: 'Chennai', package: '7 LPA', minCgpa: 6.5, deadline: '2026-10-25' },
  { id: 2, company: 'Infosys', role: 'Digital Specialist', type: 'Full-time', location: 'Bengaluru', package: '9.5 LPA', minCgpa: 7.0, deadline: '2026-10-30' },
  { id: 3, company: 'Zoho', role: 'Member Technical Staff', type: 'Full-time', location: 'Chennai', package: '10 LPA', minCgpa: 7.5, deadline: '2026-11-05' },
  { id: 4, company: 'Wipro', role: 'Project Engineer', type: 'Full-time', location: 'Hyderabad', package: '6.5 LPA', minCgpa: 6.0, deadline: '2026-11-10' },
  { id: 5, company: 'Freshworks', role: 'Software Intern', type: 'Internship', location: 'Remote', package: '30K/month', minCgpa: 7.0, deadline: '2026-10-20' },
  { id: 6, company: 'Accenture', role: 'Data Analyst', type: 'Full-time', location: 'Pune', package: '8 LPA', minCgpa: 6.5, deadline: '2026-11-15' },
  { id: 7, company: 'Cognizant', role: 'ML Intern', type: 'Internship', location: 'Coimbatore', package: '25K/month', minCgpa: 7.0, deadline: '2026-11-01' },
];
export const seedApplications = [
  { jobId: 1, status: 'Interview Scheduled', appliedOn: '2026-09-20', interview: { date: '2026-10-14', time: '10:30 AM', mode: 'Online (Teams)', round: 'Technical Round 1' } },
  { jobId: 4, status: 'Under Review', appliedOn: '2026-09-28', interview: null },
  { jobId: 6, status: 'Selected', appliedOn: '2026-09-05', interview: { date: '2026-09-18', time: '2:00 PM', mode: 'On campus', round: 'HR Round' } },
];
export const seedNotifications = [
  { id: 1, type: 'Interview Alert', text: 'TCS technical interview on 14 Oct, 10:30 AM.', read: false },
  { id: 2, type: 'Company Update', text: 'Zoho opened a new drive for 2026 batch.', read: false },
  { id: 3, type: 'Announcement', text: 'Placement orientation on 12 Oct in the main auditorium.', read: true },
];
export const trends = [
  { label: 'Jun', value: 12 }, { label: 'Jul', value: 25 }, { label: 'Aug', value: 38 },
  { label: 'Sep', value: 52 }, { label: 'Oct', value: 70 },
];
export const companyStats = [
  { label: 'TCS', value: 24 }, { label: 'Infosys', value: 18 }, { label: 'Zoho', value: 9 },
  { label: 'Wipro', value: 14 }, { label: 'Accenture', value: 11 },
];
