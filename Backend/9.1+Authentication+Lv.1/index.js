//this is the basic level authentication where we can see user entered password in pg db
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: "@prak",
  host: "localhost",
  port: 5432,
  database: "users",
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const pass = req.body.password;

  try {
    const check = await db.query("SELECT * FROM secrets WHERE email = $1", [email]);
    if (check.rows.length > 0) {
      res.send("email already exists .try login ");
    } else {
      await db.query("INSERT INTO secrets(email,passwords) VALUES ($1, $2)", [email, pass]);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const pass = req.body.password;

  try {
    const check = await db.query("SELECT * FROM secrets WHERE email = $1", [email]);
    if (check.rows.length > 0) {
      const result = await db.query("SELECT passwords FROM secrets WHERE email = $1", [email]);
      // console.log(result.rows[0].passwords);
      if (pass == result.rows[0].passwords) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password");
        // res.redirect("/");
      }
    } else {
      res.send("email does not exist. go and register ");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
