# DigiRetail Assignment

A project on gRPC implementation for microservices

## Problem Statement

1. Develop 2 microservices (any language) that communicates with one another using gRPC.
2. Lets say:  
   a. 1st Microservice: M1  
   b. 2nd Microservice: M2  
3. M1 is a client facing microservice that exposes a simple REST endpoint to input a message from the user in JSON format.
4. M1 then relays the received message to M2 by communicating over gRPC.
5. M2 then stores this message either in a local storage (say file based storage) or uses a remote database. (either one is ok)
6. After storage, M2 then integrates with a sample Slack app and sends this message(received from M1) to any one of the slack channels.
7. Feel free to Create your own slack app for demo purposes
8. Slack API documentation: https://api.slack.com/

## Local Setup

### Installation

1. Install [nodejs](https://nodejs.org/en/).
2. Install [MongoDB](https://www.mongodb.com/) or try [MongoDB Cloud](https://www.mongodb.com/cloud/atlas).
3. Clone project repository.
   `git clone https://github.com/arunnair018/DigiRetail`
4. Inside the microservice2 directory, create a new file with name " .env ". add following configuration to the file.

```
DB_URI=<DATABASE URL>
WEB_HOOK=<WEBHOOK URL>
```

### Running the Setup

#### install dependencies

- Open a terminal in each microservice directory and run command `npm install`

#### run microservices

- Open a terminal in each microservice directory and run command `npm run dev`

### Let's test it

##### Using POSTMAN

API Endpoint

- url: `http://localhost:6000/message`
- method: `POST`
- body:
  - Content-type:`application/json`
  - payload
  `{ "message":"sample" }`

##### Using NodeJs code

```javascript
var axios = require("axios");
var data = JSON.stringify({ message: "sample" });

var config = {
  method: "post",
  url: "http://localhost:6000/message",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```
   
## Snapshots
* Demo website to send message.
![alt text](https://github.com/arunnair018/media/blob/master/web.png)
* MongoDB Atlas cloud database to store messages
![alt text](https://github.com/arunnair018/media/blob/master/db.png)
* Slack channel recieving message
![alt text](https://github.com/arunnair018/media/blob/master/slack.png)

