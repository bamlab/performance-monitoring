import { group } from 'k6';
import http from 'k6/http';

import BaseTest from '../../BaseTest.js';
import { API1_NAME, API1_BASE_URL } from '../../constants.js';
import { PROJECT_1, PROJECT_2 } from '../../projects.js';

class FetchComments extends BaseTest {
  constructor() {
    super('Fetch Comments');
    this.API_NAME = API1_NAME;
    this.projects = [PROJECT_1, PROJECT_2];
    this.URL = `${API1_BASE_URL}/comments`;
    this.LATEST_PERFORMANCE = 600.0;
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

export const fetchCommentsInstance = new FetchComments();

export default () => fetchCommentsInstance.test();
