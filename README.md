This package offers the binaries needed for lambda-selenium https://github.com/blackboard/lambda-selenium.
But as the original repo doesn't offer an npm friendly package, I decide to create my own.  It can be used by adding the following to your package.json dependencies:
```
"lambda-selenium-bin": "github:CherryCircle/lambda-selenium"
```
There is a known bug (https://stackoverflow.com/questions/18401606/npm-doesnt-install-module-dependencies) where downloading this package won't download its dependencies. I came over this by executing a preinstall script that installs this specific package.
