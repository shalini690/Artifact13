// server.js
//
// Express application entry point for the Artifact13 tutorial server.
//
// This minimal Node.js + Express service hosts exactly two HTTP GET endpoints:
//   - GET /              -> responds with the plain text "Hello world"   (baseline endpoint)
//   - GET /good-evening  -> responds with the plain text "Good evening"  (added feature)
//
// The server is intentionally minimal: a single Express application instance
// with per-route handlers, following the idiomatic Express minimal-server
// convention. No additional middleware, routers, or hardening is included so
// the example stays easy to read and run.
//
// Module system: CommonJS (require). The project does not declare
// "type": "module" in package.json, so ESM import syntax is not used.

// Import the Express framework (declared as a dependency in package.json).
const express = require('express');

// Instantiate a single Express application instance.
const app = express();

// Baseline endpoint: respond to GET / with the exact string "Hello world".
app.get('/', (req, res) => res.send('Hello world'));

// New feature endpoint: respond to GET /good-evening with the exact string "Good evening".
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Determine the listening port: honor the PORT environment variable when
// provided, otherwise fall back to the conventional default of 3000.
const PORT = process.env.PORT || 3000;

// Start the HTTP server and begin accepting connections. The optional callback
// logs a startup message for tutorial clarity; it does not alter the port logic.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
