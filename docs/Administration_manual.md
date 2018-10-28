---
layout: page
title: Administration manual
permalink: /adm_manual/
---

## Deployment

Here are instructions on how to deploy this project on a live system.

## Prerequisites
To gain access to the source please contact one of the project owners.

The project's git repository needs to be cloned with git before being deployed.

* [Git](https://git-scm.com/) - The source control client used.

* [Node.js](https://nodejs.org/en/download/) - The runtime environment used.

## How to run

To deploy the app you need only run the following command if it is for the first time:
```
$npm run freshbuild
```
And then to deploy:
```
$ npm run deploy -- "some message"
```
The deploy command runs all test, adds all changes and pushes the to the repository which, if all tests pass, is deployed on a production server.
