This package offers binaries needed for lambda-selenium https://github.com/blackboard/lambda-selenium.
But as the original repo don't offer npm friendly package, I decide to do my own, it can be used by adding this to you package.json dependencies

"lambda-selenium-bin": "github:CherryCircle/lambda-selenium"

There was a known bug here https://stackoverflow.com/questions/18401606/npm-doesnt-install-module-dependencies where downloading this package won't download its dependencies, I came over this by executing a preinstall script that installs this specific package.
