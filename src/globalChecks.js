const STANDARD_RESPONSE_TIME = 500;

export default {
  okStatus: {
    'Request status should be 2xx (success)': response =>
      [200, 201, 202, 203, 204].includes(response.status),
  },
  globalPerformance: {
    [`Standard performance should be <${STANDARD_RESPONSE_TIME}ms`]: response =>
      response.timings.duration < STANDARD_RESPONSE_TIME,
  },
  latestPerformance: (duration, response, threshold) => {
    const performanceComparison = response.timings.waiting < duration * 1.1;

    threshold.add(performanceComparison);

    return {
      [`Latest waiting performance (server-side calculation) was ${duration}. New performances should not be 10% above.`]: () =>
        performanceComparison,
    };
  },
};
