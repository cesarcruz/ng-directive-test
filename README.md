# Simple Angular Directive Test #

This code is to test a simple AngularJS directive using Karma.

In the file `app.js` there is the AngularJS module, directive and the test.

The directive is to replace an element (`<my-test></my-test>`) by a list of `p` element with test names text printed
from the scope. The template is located in `directive.tpl.html` file.

## Install ##

Install npm packages, i.e. in Ubuntu:

    apt-get install -g npm

Install dependencies:

    npm install
    bower install

## Run test ##

    npm test