const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      PC = require('./controller');
     

      require('dotenv').config();

      const { APP_PORT, CONNECTION_STRING } = process.env;

      massive(CONNECTION_STRING).then(db => {
          console.log("COnnected to db!!")
          app.set('db', db)
      }).catch(err => {console.log("Error! connecting to DB!")})

      app.use(bodyParser.json());

      app.get("/api/inventory", PC.getProducts);
      app.post("/api/inventory", PC.addProduct);
      app.put("/api/inventory/:id", PC.updateProduct);
      app.delete("/api/inventory/:id", PC.deleteProduct);




app.listen(APP_PORT, () => {console.log(`Going at ${APP_PORT} MPH!`)})