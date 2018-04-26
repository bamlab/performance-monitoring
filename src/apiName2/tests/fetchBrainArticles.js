import { group } from 'k6';
import http from 'k6/http';

import BaseTest from '../../BaseTest.js';
import { API2_NAME, API2_BASE_URL } from '../../constants.js';
import { PROJECT_1 } from '../../projects.js';

class FetchBrainArticles extends BaseTest {
  constructor() {
    super('Fetch Brain Articles');
    this.API_NAME = API2_NAME;
    this.projects = [PROJECT_1];
    this.URL = `${API2_BASE_URL}/search?q=title:Brain`;
    this.LATEST_PERFORMANCE = 400.0;
  }

  test() {
    group(this.TEST_NAME, () => {
      const headers = { 'Content-Type': 'application/json' };
      const response = http.get(this.URL, {
        tags: { id: this.TEST_NAME },
      });
      this.check(response);
    });
  }
}

export const fetchBrainArticlesInstance = new FetchBrainArticles();

export default () => fetchBrainArticlesInstance.test();
