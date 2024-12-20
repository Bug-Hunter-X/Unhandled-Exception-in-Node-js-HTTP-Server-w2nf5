# Unhandled Exception in Node.js HTTP Server

This repository demonstrates an uncommon error in Node.js where an unhandled exception within an HTTP server's request handler can lead to the server crashing without proper error handling.

The `bug.js` file shows the problematic code.  The server throws an exception if the URL is `/error`. The exception isn't caught, causing the server to terminate unexpectedly.

The `bugSolution.js` file provides a solution by using a `try...catch` block to handle the potential error and prevent the server from crashing.  It logs the error gracefully and sends an appropriate response to the client.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Access `http://localhost:3000/error` in your browser. You'll see the server crash.
5. Run `node bugSolution.js`. Access `http://localhost:3000/error`. You'll see a proper error message.