# [MO] How to control the performance while developing on the back-end (~5min/~15min)

* 👨‍💻 **Owner:** [Justine Mignot](https://www.github.com/justinemignot)
* ⏰ **Last update date:** 26th of April 2018

## Why

* We don't have any check or tests that make sure that our routes are and stay fast.
* It happened that a team improved the performance of a route originally taking 6sec **by 90%**, to 500ms, and just a few days later another development from another team decreased this performance **by 90%**.

## Steps (~5min/~15min)

> 👷‍ **Prerequisite 1:** Make sure you have installed [K6 and downloaded the configuration](https://github.com/bamlab/performance-monitoring#install)

> 👷‍ **Prerequisite 2:** You know how to [run K6](./run-k6.md)

> ️⚠️ **Warning:** This process of control should be used every time you develop a feature on the back-end

> 📝 **Contributing:** If your API or routes are missing, read the [contribute documentation](./contribute.md)

### Test the performance while developing (~5min/~15min)

#### Process Schema

> ️⚠️ **Warning:** We advise only to check the performance on staging after merging your code. Because locally you would require a dump to see readable information about performance. On staging you can compare with other times the test was run.

First, check if the route you will modify is tested. In this repo, go to your API folder, and check if there is a test for the route:

* If it is already tested:

  ![Process Schema existing test](./images/existing-performance-control.png 'Process Schema')

* If there is no test for the route you are going to modify:

  ![Process Schema new test](./images/new-performance-control.png 'Process Schema')

#### Process explanations

* Check that the route **you will work on is already tested, if not [add a test for it](https://github.com/theodo/bnp-performance-monitoring/blob/master/documentation/contribute.md)**
* Do your development normally
* After having deployed in staging, measure the whole micro-service performance on staging, and compare with the last measure:
  * **If the test does not reach the thresholds**: To analyse the result, andon your architect and/or PO as well. If something broke, you need to rework your code asap.
* Version your update route and the test on your performance monitoring repository
