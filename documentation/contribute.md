# [MO] Contribute by adding new tests (~10min)

* 👨‍💻 **Owner:** [Justine Mignot](https://www.github.com/justinemignot)
* ⏰ **Last update date:** 26th of April 2018

### Steps

#### Add a new API

* Create a new folder in `./src`, for example: `./src/apiName3`
* Copy an `index.js` file like: `./src/apiName3/index.js`
* Create another folder, `tests` in your API folder, example: `./src/apiName3/tests`
* Check the next steps for adding tests

#### Add a new tested route

* Add a new test by copying how other tests work for example: [src/apiName1/tests/fetchComments.js](../src/apiName1/tests/fetchComments.js)
* Add your test function in the API index.js, for example: [src/apiName1/index.js](../src/apiName1/index.js)
* Add the test threshold in the [global options](../src/globalOptions.js)
* Add your test and its instance to [index file](../src/index.js)
* Run the test directly on the new route to get its average response time

  ```bash
  k6 run src/{replace_by_your_API}/tests/{replace_by_your_test}.js --vus 2 --iterations 10
  ```

  > **Why "vus = 2" and "iteration = 10":** we use those same settings in [global options](../src/globalOptions.js) to run all the tests of a full API

  ```docker
  docker run -v {replace_by_path_of_src_folder}:/k6 -i loadimpact/k6 run /k6/{replace_by_your_API}/tests/{replace_by_your_test}.js --vus 2 --iterations 10
  ```

* In your test, modify field `LATEST_PERFORMANCE` with `http_req_waiting` average time.

  > Request is cut in several steps : http_req_connecting, http_req_sending, http_req_waiting, http_req_receiving,...
  > The time that matters, on which we can act is `http_req_waiting` time because it represents the server processing your request. Hence the performance of the code, and not the network.

* Depending on the result:
  * **If the performance is above the standard time you fixed (we chose 500ms):** Andon your architect and/or PO. Depending on the gravity, either find time to investigate asap, or create a performance issue ticket in order to fix it next time.
  * **If the performance is acceptable:** Write in your new test file the found average performance
* Don't forget to version the changes in your performance monitoring repo

> 👉 **Next steps:** Follow [Run K6 on an API](./run-k6.md)
