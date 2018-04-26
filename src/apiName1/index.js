import { group } from 'k6';

import options from '../globalOptions.js';

import fetchComments from './tests/fetchComments.js';
import fetchPhotos from './tests/fetchPhotos.js';
import fetchPosts from './tests/fetchPosts.js';

export { options };

export default () => {
  group('API_1 Tests', () => {
    fetchComments();
    fetchPhotos();
    fetchPosts();
  });
};
