import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import serverRenderer from "./middleware/renderer";

const PORT = 3000;

const webpackConfig = require("../../webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

const compiler = webpack(webpackConfig);

// Initialize the application and create the routes
const app = express();

app.use(
  webpackDevMiddleware(
    compiler /* , {
    logLevel: 'silent',
    publicPath: '/dist/web',
    writeToDisk(filePath) {
      return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath)
    },
  } */
  )
);

app.use(bodyParser.json());
app.use(cors());

// Set up routes
const router = express.Router();
app.use(router);
router.use(express.static(path.resolve(__dirname, "dist"), { index: false })); // root (/) should always serve our server rendered page
router.use(serverRenderer);

// Start the app
app.listen(PORT, (error: Error) => {
  if (error) {
    return console.error("Error on app start: ", error);
  }

  console.log("listening on " + PORT + "...");
});
