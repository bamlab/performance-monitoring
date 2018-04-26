import { fetchCommentsInstance } from './apiName1/tests/fetchComments.js';
import { fetchPhotosInstance } from './apiName1/tests/fetchPhotos.js';
import { fetchPostsInstance } from './apiName1/tests/fetchPosts.js';
import { fetchBrainArticlesInstance } from './apiName2/tests/fetchBrainArticles.js';
import { fetchDNAArticlesInstance } from './apiName2/tests/fetchDNAArticles.js';

export default {
  thresholds: Object.assign(
    {},
    fetchCommentsInstance.threshold,
    fetchPhotosInstance.threshold,
    fetchPostsInstance.threshold,
    fetchBrainArticlesInstance.threshold,
    fetchDNAArticlesInstance.threshold
  ),
  vus: 2,
  iterations: 10,
  noUsageReport: true,
};
