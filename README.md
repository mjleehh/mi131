# MI131 Web Frameworks and APIs 2017

This repo contains code samples from the MI131 lecture *Web Frameworks and APIs* held at [FH Kiel](https://fh-kiel.de/) 
in winter term 2017/2018.

The lecture slides can be found in the [MI131 slide repo](https://github.com/mjleehh/mi131-slides) and the 
[module page](https://lms.fh-kiel.de).

### Checking out the examples

Clone this repo:

```bash
$ git clone https://github.com/mjleehh/mi131 example-directory 
```

Go to the repo root dir:
```bash
$ cd example-directory
```

All examples are tagged. To list them:

```bash
$ git tag
frontend/react/basic-setup
frontend/react/create-component
frontend/react/create-stateful-component
frontend/react/create-stateless-component
frontend/react/lists-and-keys
frontend/webpack/basic-setup
frontend/webpack/cleanup-dist
...
```

Examples are sorted by:
- frontend/backend
- topic
- example name

To check out one of the examples:
```bash
$ git checkout example-name
```

To make sure you have all dependencies installed, clear the `node_modules` directory:
```bash
$ npm i
```

To run the example in your browser:
```bash
$ npm start
```
This will start a backend on `localhost:3000` and a serve the frontend at `localhost:8080`
Both the backend and frontend code is watched, so if you change something it will instantly update.

NOTE: This will not work on Windows systems. To run the example on Windows:

Go to the project root directory and first start the backend:
```
node ./node_modules/babel-watch/babel-watch.js src/server/index.js
```
Then start the webpack server, to server the frontend:
```
node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --open
```
