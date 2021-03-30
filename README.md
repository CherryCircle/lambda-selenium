**ARCHIVED**
This repository has been archived because we've changed over to [Puppeteer](https://github.com/puppeteer/puppeteer#readme) instead.

**Original README:**

This package offers binaries needed for lambda-selenium https://github.com/blackboard/lambda-selenium.
But as the original repo don't offer npm friendly package, I decide to do my own, it can be used by adding this to you package.json dependencies

"lambda-selenium-bin": "github:CherryCircle/lambda-selenium"

There was a known bug here https://stackoverflow.com/questions/18401606/npm-doesnt-install-module-dependencies where downloading this package won't download its dependencies, I came over this by executing a preinstall script that installs this specific package.

A link for running lambda-selenium in AWS Lambda Node v10.x:
https://stackoverflow.com/questions/58592735/aws-lambda-node-js-10-x-runtime-error-with-selenium-webdriver
