---
layout: page
title: Administration manual
permalink: /adm_manual/
---

## Deployment

Here are instructions on how to deploy this project on a live system.

## Prerequisites
To gain access to the source control system please contact one of the project owners.

* [Link to repository](https://github.com/LonelyDancers/LateTermAssignment)

The project's git repository needs to be cloned with git before being deployed.

* [Git](https://git-scm.com/) - The source control client used.

* [Node.js](https://nodejs.org/en/download/) - The runtime environment used.

## How to run
If you are using git bash you can use:
```
$git clone https://github.com/LonelyDancers/LateTermAssignment
```
To build and run the the app locally you need only run the following command if it is for the first time since it installs all necessary dependencies:
```
$npm run freshbuild
```
The server should then run on localhost:8080
Use an OPTIONS request on localhost:8080/api to see the available API urls. 

And then to deploy run:
```
$ npm run deploy -- "some message"
```
The deploy command runs relevant tests locally, saves code coverage, adds all changes to the coverage folder, commits with a message and pushes to the repository which runs unit tests and integration tests on CircleCI and then deploys to a staging server and if puppeteer tests are successful on the staging server then it is deployed on a production server.

For further build commands check scripts in package.json in the project root.

* [Click here to go to deployed page](http://lonelydancers.herokuapp.com/)
* [Click here to go to see code coverage](http://lonelydancers.herokuapp.com/coverage)


## Project structure

The structure of the project needed for maintenance is:

* .circleci - Contains a config.yml for CircleCI.
* coverage - Contains code coverage.
* docs - Contains all documentation of the project and files for the layout of the GitHub Pages site.
* src - Contains client, logic, server and styles folders.
  * client - Contains end-to-end tests and front end of the app.
  * logic - Contains all logic regarding the app.
  * server - Contains the API for the app.
  * styles - Contains the CSS file that styles the app frontpage.