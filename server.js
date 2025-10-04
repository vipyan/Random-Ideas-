const express = require("express");
const app = express();
const port = 5000;

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Random Ideas API" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
