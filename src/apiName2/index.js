import { group } from 'k6';

import options from '../globalOptions.js';

import fetchBrainArticles from './tests/fetchBrainArticles.js';
import fetchDNAArticles from './tests/fetchDNAArticles.js';

export { options };

export default () => {
  group('API_2 Tests', () => {
    fetchBrainArticles();
    fetchDNAArticles();
  });
};
