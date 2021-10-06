const config = require("./config/config");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./routes/_index");

app.use(cors())
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
/* Adding Routes to server */
app.use(routes);
/* 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
}); */


const listener = app.listen(config.app.port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
