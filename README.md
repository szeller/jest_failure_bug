# jest_failure_bug

This repo is to illustrate a bug with jest versions after 22.1.0
https://github.com/facebook/jest/issues/5332

The test script is defined in package.json as 

    jest && echo exit is broken

so the echo statement should only happen if jest exits with a success value, which it shouldn't ever
do because there is a test that always fails.  Running 

    npm test

will work fine and not print it, but 

    npm test > foo

will print the echo statement to foo

