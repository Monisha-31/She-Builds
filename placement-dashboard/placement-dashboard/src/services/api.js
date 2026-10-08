// Mock service layer: swap these for fetch() calls to a real API later.
import { jobs } from '../data/mockData';
export const getJobs = () => Promise.resolve(jobs);
