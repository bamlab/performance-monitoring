# [MO] Run K6 on an API (~10min)

* 👨‍💻 **Owner:** [Justine Mignot](https://www.github.com/justinemignot)
* ⏰ **Last update date:** 26th of April 2018

## Steps

> 👷‍ **Prerequisite:** Make sure you have installed [K6 and downloaded the configuration](https://github.com/bamlab/performance-monitoring#install)

* In your terminal, from the root of the repository:

  ```bash
  k6 run src/{replace_by_your_API}/index.js
  ```

  * You can pass options to your command, or directly in [`./src/globalOptions.js`](../src/globalOptions.js)

    * `--vus 10` 10 virtual users
    * `--duration 5s` run the test for 5seconds
    * `--no-usage-report` do not send any data to K6 team
    * More detail on [options on K6 website](https://k6.readme.io/docs/options)

  * You can run all tests tagged with your project name by running:

  ```bash
  export PROJECT={replace_by_your_project_name} && k6 run src/index.js
  ```

* Result:

  * The green and red sentences are "checks", they are tests you setup in the code, they won't break the series of tests
  * The green tick or red cross below, along "GET_MODULES" and "GET_SUBMODULES", are thresholds, they make sure that the latest performance test is above 70%, if not the series will break

  ![K6 Output](./images/k6-output.png 'K6 Output')

> 👉 **Next steps:** Follow [how to control the performance while developing on the backend](./performance-control.md)
