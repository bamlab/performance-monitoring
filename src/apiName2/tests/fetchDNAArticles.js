import { group } from 'k6';
import http from 'k6/http';

import BaseTest from '../../BaseTest.js';
import { API2_NAME, API2_BASE_URL } from '../../constants.js';
import { PROJECT_1 } from '../../projects.js';

class FetchDNAArticles extends BaseTest {
  constructor() {
    super('Fetch DNA Articles');
    this.API_NAME = API2_NAME;
    this.projects = [PROJECT_1];
    this.URL = `${API2_BASE_URL}/search?q=title:DNA`;
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

export const fetchDNAArticlesInstance = new FetchDNAArticles();

export default () => fetchDNAArticlesInstance.test();
