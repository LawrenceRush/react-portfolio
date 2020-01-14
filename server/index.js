const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const pino = require('express-pino-logger')();
const publicPath = path.join(__dirname, "../client/build");
const app = express();
const port = process.env.PORT || 3001;
// ... other app.use middleware 
app.use(express.static(publicPath));


app.use(bodyParser.urlencoded({ extended: false,
  limit: '50mb',
  parameterLimit: 100000 }));

  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

  
app.use(pino);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);