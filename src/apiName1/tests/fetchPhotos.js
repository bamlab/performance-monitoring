import { group } from 'k6';
import http from 'k6/http';

import BaseTest from '../../BaseTest.js';
import { API1_NAME, API1_BASE_URL } from '../../constants.js';
import { PROJECT_1 } from '../../projects.js';

class FetchPhotos extends BaseTest {
  constructor() {
    super('Fetch Photos');
    this.API_NAME = API1_NAME;
    this.projects = [PROJECT_1];
    this.URL = `${API1_BASE_URL}/photos`;
    this.LATEST_PERFORMANCE = 200.0;
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

export const fetchPhotosInstance = new FetchPhotos();

export default () => fetchPhotosInstance.test();
