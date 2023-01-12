
# Hacker-News-API

A React application to pull the news from a public API using different types of hooks


## Features

- Sort By Author,Comment,Title,or Points
- Remember the last 5 searches
- Pagination Fetch to keep track of numbers of news shown at a time.

## Demo

Link to my Demo: [hacker-news-api-2cb35.web.app](https://hacker-news-api-2cb35.web.app/)


## Packages

Install packages with npm

```bash
npm install
```

## Deployment

Deployment of this project will use Firebase

First, build your application on the command line:
```bash
npm run build
```
Then, install the Firebase CLI globally to the node modules:
```bash
npm install -g firebase-tools
```
If you don’t have a Firebase project yet, sign up for a [Firebase](https://firebase.google.com/) account and create a new project there. Then you can associate the Firebase CLI with the Firebase account (Google account):

```bash
npm run deploy
```
Next, move to the project’s folder and execute the following command, which initializes a Firebase project for the Firebase hosting features:
```bash
firebase init
```
Then choose Hosting with Configuration. Make sure you use your build folder as the public folder

After that,run this following command as it will give you the link to your web application.
```bash
firebase deploy
```