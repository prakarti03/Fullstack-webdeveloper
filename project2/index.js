import express from "express";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;
app.use(express.static("public"));
const api = "https://openlibrary.org/search.json?q=";

const db = new pg.Client({
    user : "postgres",
    host: "localhost",
    password: "@prak",
    port: 5432,
    database: "books",
}); 
let n = [];

app.get("/",async(req,res)=>{
    await db.connect();
    try {
        for(let i = 1; i< 10;i++){
        const result = await db.query("SELECT name FROM favourite WHERE id = $1",[i]);
        //  console.log(result.rows[0].name);
        const cont = await axios.get(api + result.rows[0].name);
        // console.log(cont.data.docs[0].cover_i);
        n.push(cont.data.docs[0].cover_i);
        }
        // console.log(n);
        res.render("index.ejs", {content: n});
        
    } catch (error) {
        console.log(error);
    }
    
});
app.get("/it'snotsummerwithoutyou",async(req,res)=>{
    try{
        const cont = await axios.get(api + "it's not summer without you");
        res.render("summer2.ejs",{content:cont.data.docs[0].cover_i}); 
    }catch(error){
        console.log(error);
    }
});
app.get("/thesummeriturnedpretty",async(req,res)=>{
    try{
        const cont = await axios.get(api + "the summer i turned pretty");
        res.render("summer1.ejs",{content:cont.data.docs[0].cover_i}); 
    }catch(error){
        console.log(error);
    }
});
app.get("/we'llalwayshavesummer",async(req,res)=>{
    try{
        const cont = await axios.get(api + "we'll always have summer");
        res.render("summer3.ejs",{content:cont.data.docs[0].cover_i}); 
    }catch(error){
        console.log(error);
    }
});
app.get("/halfgirlfriend",async(req,res)=>{
    try{
        const cont = await axios.get(api + "half girlfriend");
        res.render("half.ejs",{content:cont.data.docs[0].cover_i}); 
    }catch(error){
        console.log(error);
    }
});
app.get("/2states",async(req,res)=>{
    try{
        const cont = await axios.get(api + "2 States:The Story Of My Marriage");
        res.render("2states.ejs",{content:cont.data.docs[0].cover_i}); 
    }catch(error){
        console.log(error);
    }
});
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});