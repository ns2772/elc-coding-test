/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const { parse } = require("querystring");
const data = require("./data");
const http = require("http");
const hostname = "localhost";
const port = 3035;

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http
  .createServer(function (req, res) {
    // .. Here you can create your data response in a JSON format
    if (req.method === "POST") {
      collectRequestData(req, (result) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
        res.setHeader("Access-Control-Max-Age", 60 * 60 * 24 * 30);

        let searchQuery = Object.keys(result)[0];

        if (searchQuery === undefined) {
          searchQuery = "";
        }

        const searchResultsArr = [];
        data.forEach((element) => {
          if (
            element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.about.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.tags
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ) {
            searchResultsArr.push(element);
          }
        });

        res.end(JSON.stringify(searchResultsArr));
      });
    } else {
      res.end("Wrong request method used");
    }
  })
  .listen(port);

function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}

console.log(`[Server running on ${hostname}:${port}]`);
