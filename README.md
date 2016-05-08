# Simple Angular Directive Test #

This code is to test a simple AngularJS directive using Karma.

**Version 1:** ([Release 1.0](https://github.com/cesarcruz/ng-directive-test/releases/tag/v1.0))

In the file `app.js` there is the AngularJS module, directive and the test.

The directive is to replace an element (`<my-test></my-test>`) by a list of `p` element with test names text printed
from the scope. The template is located in `directive.tpl.html` file.

**Version 2:** ([Release 2.0](https://github.com/cesarcruz/ng-directive-test/releases/tag/v2.0))

Now the directive loads data from a json using http request.

**Caution:** Note in this version you will need to serve files from a web server to avoid the error:

> Error: Access to restricted URI denied

This can be done easily using the python http server, by executing this command:

    python -m SimpleHTTPServer

## Install ##

Install npm packages, i.e. in Ubuntu:

    apt-get install -g npm

Install dependencies:

    npm install
    bower install

## Run test ##

    npm test
