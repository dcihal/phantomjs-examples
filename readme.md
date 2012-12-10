This project is forked from 

https://github.com/jcarver989/phantom-jasmine
---------------------------------------------

PhantomJs-Examples

Just what I want to show what phantomjs can do. 

1. Install https://github.com/ariya/phantomjs/

Running Tests
-------------------
Assuming you have PhantomJs setup and installed...

Clone this repository, cd into it and run:

    phantomjs lib/run_jasmine_test.coffee examples/TestRunner.html


On some running OS X you might have to pass in the full url, ex:

    phantomjs lib/run_jasmine_test.coffee file://localhost/Users/bob/phantom-jasmine/examples/TestRunner.html 


If everything works you should see output like this in your terminal:

    Util : should fail for the example
    Error: Expected false to be truthy.

    Finished
    -----------------
    3 specs, 1 failure in 0.024s.
    

To run your own tests with Phantom-Jasmine just look at TestRunner.html and modify/copy the script tags accordingly.

---------------------------------------------

To run headless cucumber test

	cucumber features/registration.feature