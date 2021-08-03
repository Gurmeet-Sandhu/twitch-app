# Twitch Search

## About

This application will allow user to search for a channel, select a channel and view that channel profile.

## Technologies Used
* React
* Twitch API

## Requirements
You need to have following programs installed on your local machine to run this application
* npm
* node

## Get an Access Token

**1** Register your application on [Twitch Developer Console](https://dev.twitch.tv/console/apps)

**2** Once you register your application, get an access token through twitch CLI by giving your client-id and client secret. Follow Step 2 on [this page](https://dev.twitch.tv/docs/api/)

## How run on the local machine

**Step1** Clone the Github repository
```
git clone https://github.com/Gurmeet-Sandhu/twitch-app.git

```

**Step2** Create .env file in the root folder of you project and create a variables REACT_APP_CLIENT_ID and REACT_APP_ACCESS_TOKEN and assign your client ID and access token to these variables

```
REACT_APP_CLIENT_ID = < YOUR_CLIENT_ID>
REACT_APP_ACCESS_TOKEN = <YOUR_ACCESS_TOKEN>
```

**Step3** Install dependencies

```
npm install

```

**Step4** Run application on your local machine

```
npm start

```