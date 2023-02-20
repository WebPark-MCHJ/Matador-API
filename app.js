const axios = require("axios");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const { getHeapStatistics } = require("v8");
const { stringify } = require("querystring");

async function metalPrice(url) {
  
    return await fetch("https://lepricon.uz/web/nd-birjadata/birja-data")
      .then((res) => res.json()).then(result => result);
}

metalPrice();
app.get("/metal", async (req, res) => {
  const data = await metalPrice();
  res.send(data)
})

app.listen(3000);