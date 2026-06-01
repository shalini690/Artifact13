# Artifact13

A minimal Node.js HTTP server built with the [Express](https://expressjs.com/) framework.
It is a small tutorial server that exposes two `GET` endpoints — a baseline greeting and an
evening greeting.

## Prerequisites

- [Node.js](https://nodejs.org/) `>= 18` (the server uses Express 5, which requires Node.js 18 or newer).
- [npm](https://www.npmjs.com/) (bundled with Node.js) as the package manager.

## Installation

Install the project dependencies (this installs Express):

```bash
npm install
```

## Running

Start the server:

```bash
npm start
```

By default the server listens on `http://localhost:3000`. To use a different port, set the
`PORT` environment variable before starting:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
| ------ | --------------- | ------------- |
| `GET`  | `/`             | `Hello world` |
| `GET`  | `/good-evening` | `Good evening` |
