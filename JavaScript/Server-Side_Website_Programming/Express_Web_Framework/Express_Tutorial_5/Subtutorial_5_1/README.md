# Asynchronous flow control using async

The controller code for some of our *LocalLibrary* pages will depend on the results of multiple asynchronous requests, which may be required to run either in some particular order or in parallel. In order to manage flow control, and render pages when we have all the required information available, we'll use the popular node [async]() module.