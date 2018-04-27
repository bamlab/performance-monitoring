import fetchCommentsTest, { fetchCommentsInstance } from './apiName1/tests/fetchComments.js';
import fetchPhotosTest, { fetchPhotosInstance } from './apiName1/tests/fetchPhotos.js';
import fetchPostsTest, { fetchPostsInstance } from './apiName1/tests/fetchPosts.js';
import fetchBrainArticlesTest, {
  fetchBrainArticlesInstance,
} from './apiName2/tests/fetchBrainArticles.js';
import fetchDNAArticlesTest, {
  fetchDNAArticlesInstance,
} from './apiName2/tests/fetchDNAArticles.js';

import { group } from 'k6';
import options from './globalOptions.js';

export { options };

const allTestsObjects = [
  { test: fetchCommentsTest, instance: fetchCommentsInstance },
  { test: fetchPhotosTest, instance: fetchPhotosInstance },
  { test: fetchPostsTest, instance: fetchPostsInstance },
  { test: fetchBrainArticlesTest, instance: fetchBrainArticlesInstance },
  { test: fetchDNAArticlesTest, instance: fetchDNAArticlesInstance },
];

export default () => {
  allTestsObjects.forEach(testObject => {
    if (
      __ENV.PROJECT &&
      testObject.instance.projects &&
      testObject.instance.projects.includes(__ENV.PROJECT.toUpperCase())
    )
      group(testObject.instance.API_NAME, () => {
        testObject.test();
      });
  });
};
