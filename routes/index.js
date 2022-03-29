var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", async function (req, res, next) {
  const response = await axios.post(
    "https://www.facebook.com/api/graphql?variables=%7B%22pageID%22%3A%22123137871031991%22%7D&doc_id=5182274978466320",
    null,
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Language": "en-US,en;",
        accept: "*/*",
        origin: "https://www.facebook.com/",
        referer:
          "https://www.facebook.com/pg/kizombabisumadrid/events/?ref=page_internal&mt_nav=0",
      },
    }
  );
  res.send(response.data);
});

module.exports = router;
