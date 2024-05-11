//------- Not use express Router---------

// const express = require("express"),
//   http = require("http");

//const bodyParser = require("body-parser");




// const hostname = "localhost";
// const port = 3000;

// const app = express();

// app.use(bodyParser.json());



// app.all("/dishes", (req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   next();
// });

// app.get("/dishes", (req, res, next) => {
//   res.end("Will send all the dish to you Wall!");
// });

// app.post("/dishes", (req, res, next) => {
//   res.end(
//     "Will add the dish: " +
//       req.body.name +
//       " with details: " +
//       req.body.description
//   );
// });

// app.put("/dishes", (req, res, next) => {
//   res.statusCode = 403;
//   res.end("Put operation not supported on /dishes");
// });

// app.delete("/dishes", (req, res, next) => {
//   res.end("Deleting all Dishes");
// });

// app.get("/dishes/:dishId", (req, res, next) => {
//   res.end("Will send details: " + req.params.dishId + " to you!");
// });

// app.post("/dishes/:dishId", (req, res, next) => {
//   res.statusCode = 403;
//   res.end("Post operation not supported on /dishes/" + req.params.dishId);
// });

// app.put("/dishes/:dishId", (req, res, next) => {
//   res.write("Updating the dish: " + req.params.dishId + "\n");
//   res.end(
//     "Will update the dish" +
//       req.body.name +
//       "with details: " +
//       req.body.description
//   );
// });

// app.delete("/dishes/:dishId", (req, res, next) => {
//   res.end("Deleting dish: " + req.params.dishId);
// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`server running at http://${hostname}:${port}/`);
// });



//----------------Use Express Router----------------

const express = require("express"),
  http = require("http");


const dishRouter = require('./routes/dishRouter');


const hostname = "localhost";
const port = 3000;

const app = express();

app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});