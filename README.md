# Back-end Performance Monitoring

## Objective

Measuring and checking the performances of all your project APIs routes.

## Install

* Fork this repository and name it `{YOUR_ORGANIZATION_NAME}-performance-monitoring`
* Clone your new repo locally
* [Install k6](https://docs.k6.io/docs/installation)
* You're good to test, find below more documentation

## Explanation and Structure

K6 is a load tester. It will test for you a set of routes.
We mainly use it so far to check that the performance of our routes remain good.

The main advantage of this package is that when a developer works on the backend, he is capable locally then on staging to see the performance and response impact of his development on all routes of an API, shared between all projects.

The folder is structured this way:

```bash
src
├── apiName1 # one folder per API
│   ├── tests # all tests are located in a tests folder
│   │   ├── fetchComments.js # one route tested per file
│   │   ...
│   └── index.js # a main index file grouping all API tests
├── apiName2
│   ├── tests
│   │   ├── fetchArticles.js
│   │   ...
│   └── index.js
...
```

* **Next:** It is also possible that we place this repository in the shared back-end utils and in each API repository.

## Usage

* [Contribute by adding new tests](./documentation/contribute.md)
* [Run K6 performance monitoring on an API](./documentation/run-k6.md)
* [How to control the performance while developing on the backend](./documentation/performance-control.md)

## Official Documentation

* See directly on [K6 website](https://docs.k6.io/)
