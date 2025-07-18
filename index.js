const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const API_KEY = "YOUR_API_KEY_HERE"; // 여기에 Pi API 키 넣으세요

app.post("/payment", async (req, res) => {
  const { paymentId } = req.body;

  try {
    const result = await axios.post(
      "https://api.minepi.com/v2/payments/" + paymentId + "/complete",
      {},
      {
        headers: {
          Authorization: `Key ${API_KEY}`,
        },
      }
    );
    res.send(result.data);
  } catch (error) {
    res.status(500).send("Payment error: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Pi Server is running.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
