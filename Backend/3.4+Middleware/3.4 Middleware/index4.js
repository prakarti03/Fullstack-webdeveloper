import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyparser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/",(res,req)=>{
  req.sendFile(__dirname + "/public/index.html");
})

app.use(bodyparser.urlencoded({extended:"true"}));
app.post("/submit",(req,res)=>{
    res.send(`<h1>Your BandName is: </h1><h2>${req.body.street + req.body.pet}</h2>`);
    //res.send(`<h2>heyy ${req.body.street}</h2>`); 
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
