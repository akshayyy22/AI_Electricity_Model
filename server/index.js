import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import maxdemandRoutes from "./routes/maxdemand.js";
import seasondemandRoutes from "./routes/seasondemand.js";
import { MaxDemandOfEveryMonth, MaxDemandOfEveryYear, MaxDemandOfEachMonthEveryYear } from "./models/KPI.js"; // Updated import
import  Demand  from "./models/MaxDemandEachMonth.js"
import  SeasonalDemand  from "./models/SeasonDemandSchema.js"
import { MaxDemandOfEveryMonthFromLast16Years , MaxDemandOfEveryYearFromLast16Years,MaxDemandOfEachMonthEveryYearFromLast16Years , MaxDemandOfJanuaryFromLast16Years , MaxDemandOfFebruaryFromLast16Years , MaxDemandOfMarchFromLast16Years , MaxDemandOfAprilFromLast16Years , MaxDemandOfMayFromLast16Years , MaxDemandOfJuneFromLast16Years , MaxDemandOfJulyFromLast16Years , MaxDemandOfAugustFromLast16Years , MaxDemandOfSeptemberFromLast16Years , MaxDemandOfOctoberFromLast16Years , MaxDemandOfNovemberFromLast16Years , MaxDemandOfDecemberFromLast16Years , MaxDemandOfFallSeason , MaxDemandOfSpringSeason , MaxDemandOfSummerSeason , MaxDemandOfWinterSeason} from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express(); 
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/maxdemand", maxdemandRoutes);
app.use("/seasondemand", seasondemandRoutes);

/* CONFIGURATIONS */
// Load environment variables from .env.local
dotenv.config({ path: './.env.local' });

// Log MongoDB URL to check if it's loaded correctly
console.log("MongoDB URL:", process.env.MONGO_URL);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {

  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    MaxDemandOfEveryMonth.insertMany(MaxDemandOfEveryMonthFromLast16Years);
    MaxDemandOfEveryYear.insertMany(MaxDemandOfEveryYearFromLast16Years);
    MaxDemandOfEachMonthEveryYear.insertMany(MaxDemandOfEachMonthEveryYearFromLast16Years);
    Demand.insertMany( MaxDemandOfJanuaryFromLast16Years , MaxDemandOfFebruaryFromLast16Years , MaxDemandOfMarchFromLast16Years , MaxDemandOfAprilFromLast16Years , MaxDemandOfMayFromLast16Years , MaxDemandOfJuneFromLast16Years , MaxDemandOfJulyFromLast16Years , MaxDemandOfAugustFromLast16Years , MaxDemandOfSeptemberFromLast16Years , MaxDemandOfOctoberFromLast16Years , MaxDemandOfNovemberFromLast16Years , MaxDemandOfDecemberFromLast16Years);
    SeasonalDemand.insertMany( MaxDemandOfFallSeason , MaxDemandOfSpringSeason , MaxDemandOfSummerSeason , MaxDemandOfWinterSeason);


  })
  .catch((error) => console.log(`${error} did not connect`));
