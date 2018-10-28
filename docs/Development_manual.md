---
layout: page
title: Development manual
permalink: /dev_manual/
---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

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
To build the app you need only run the following command if it is for the first time since it installs all necessary dependencies:
```
$npm run freshbuild
```

## Project structure

The structure of the project is as follows:

* .circleci - Contains a config.yml for CircleCI.
* coverage - Contains code coverage.
* docs - Contains all documentation of the project and files for the layout of the GitHub Pages site.
* src - Contains client, logic, server and styles folders.
  * client - Contains end-to-end tests and front end of the app.
  * logic - Contains all logic regarding the app.
  * server - Contains the API for the app.
  * styles - Contains the CSS file that styles the app frontpage.
