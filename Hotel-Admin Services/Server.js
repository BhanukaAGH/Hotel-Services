const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./DB/Db");

//routers
const reservationRouter = require("./Routers/reservationRoutes");

//middleware
const app = express();
app.use(express.json());
app.use("/api/v1/hotel/admin", reservationRouter);

dotenv.config();

const port = process.env.PORT || 5000;

const connectionStrat = async () => {
  try {
    await connectDb(process.env.DBURI);
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
    console.log("Db connection establish");
  } catch (error) {
    console.log("DB connection fail");
    console.log(error);
  }
};

connectionStrat();
