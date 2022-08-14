const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize to turn the server on {force: true} = drop all databases/ off {force: false} = keep all databases. 
//important**** remember to set force to true when updating/creating new databases and then reset back to force: false when old tables were dropped!
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
});
