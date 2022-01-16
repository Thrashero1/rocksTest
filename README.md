# Test using Cypress

This is a quick test of the website [apuestasonline](https://apuestasonline.net/)

## Requirements
The following programs are required for the installation and running of this test.

Node JS: Verions 12 or higher. This can be installed from [node](https://nodejs.org/en/)
This should also install the npm package handler.

Yarn: This can be installed via npm using the command
```bash
npm install -g yarn
```

Once that is done cd into to the folder where the project is cloned and run 
```bash
yarn
```
This will install all of the required packages to run this project.

When complete run the following cli command to execute the test:
### Uisng the cypress GUI
```bash
yarn cy:open
```
### Run the test headlessly
```bash
yarn cy:test
```

## Report

The report, while using the GUI method, is within the GUI itself.

The report that is generated headlessly can be further enhanced by running the following command:
```bash
yarn cy:report
```
This will in turn run 3 commands and Generate an HTML report which can in be viewed at the location detailed within the CLI
This is usually within the folder {path to cloned repo}/cypress/mochawesome-report.

In Addition to this, after the full suite of tests is run, the report can also be sent out via email using the following:
```bash
yarn
```

The email client being used is [ethereal](https://ethereal.email/) which is a test email client. The credentials will have to be updated in the node file found at cypress/plugins/index.js once the email client is created on the aforementioned site. The attachment will be sent out there. I have been having issues with the node fuinctionality when running it healessly which was killing off all assets required for the report and in turn even though the function executes successfully this is not actually sending out the email and would need more time to research the reasonm for this. Yet if you execute the email task in the GUI mode this works flawlessly.
