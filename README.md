# STORE API
API for a Store Frontend

## Prerequisites
This project requires NodeJS and NPM. To make sure you have them on your machine, try running the following commands.

```sh
$ npm -v
9.66
$ node -v
v18.16.0
```

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation
**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install
```

Include a file named `.env` in the root directory. It should define the following:

```code
MONGO_URI=your_connection_string
HOST=your_host
PORT=your_port
```

## Usage

### Serving the App

```sh
$ npm start
```

### Running with Developer Tools

```sh
$ npm run devStart
```

## Built With

- NodeJS
- ExpressJS
- MongoDB
