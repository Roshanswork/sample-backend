require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listning server from port ${PORT}`);
});
