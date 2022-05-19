import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";
import Messenger from "./src/controllers/createMessage";
import { Settings } from "./settings";

const app = express();

// instance of the Messenger class
const messenges = new Messenger(Settings.PORT);

// connecting to the database with variables
const dataConnection = (user: string, pass: string): string => {
  return `mongodb://${user}:${pass}@linkedin-api.b44pa.mongodb.net/?retryWrites=true&w=majority`;
};
const database = dataConnection(Settings.mlabUser, Settings.mlabPassword);

// mongoose connection
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// interface
// interface Name {
//   firstName: string;
// }

// generic function
function nameCreator<T>(name: T): T {
  return name;
}

// const nameCreator = (name: Name): string => {
//   return `Hello, ${name.firstName},`;
// };

// let myName = { firstName: "Manny" };
let myName = nameCreator<string>("Manny, ");

// declariation merging
interface Warriors {
  weapon: string;
  skills: number;
}

interface Warriors {
  name: string;
}

let ninja: Warriors = { weapon: "katana", skills: 100, name: "Manny" };

// serving static files
app.use(express.static("public"));

// print to the webpage
app.get("/", (req, res) => res.send(messenges.messagePrint()));

// print to the console
app.listen(Settings.PORT, () => console.log(myName, messenges.messagePrint()));
