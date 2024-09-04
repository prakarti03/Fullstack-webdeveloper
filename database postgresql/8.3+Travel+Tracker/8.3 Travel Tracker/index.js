import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

let country = [];
const db = new pg.Client({
  user: "postgres",
  password: "@prak",
  host: "localhost",
  port: "5432",
  database: "WORLD",
});
db.connect();
db.query("SELECT country_code FROM visited_country",(err,res)=>{
  if(err){
    console.error("error executing",err.stack);
  }else{  
    res.rows.forEach((count) => {
      country.push(count.country_code);
    });
    console.log(country);
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  res.render("index.ejs",{ countries: country, total: country.length,});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
