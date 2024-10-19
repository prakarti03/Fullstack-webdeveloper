import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const api = "https://openlibrary.org/search.json?q=";

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
    user : "postgres",
    host: "localhost",
    password: "@prak",
    port: 5432,
    database: "books",
}); 

// Connect to the database
async function connectDb() {
    try {
        await db.connect();
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

async function imagefetch() {
    const coverUrls = [];
    try {
        const result = await db.query("SELECT name FROM favourite ORDER BY id ASC");
        const favorites = result.rows;

        for (const favorite of favorites) {
            const response = await axios.get(api + favorite.name);
            if (response.data.docs.length > 0) {
                const coverId = response.data.docs[0].cover_i;
                if (coverId) {
                    coverUrls.push(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`);
                }
            }
        }
        return coverUrls;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}
app.get("/posts",async(req,res)=>{
    try{
        const n = await imagefetch();
        console.log(n);
        const posts = await db.query("SELECT * FROM favourite ORDER BY id ASC");
        const result = posts.rows;
        console.log(result);
        res.json({result,n});
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
app.listen(port, async() => {
    await connectDb();
    console.log(`API is running at http://localhost:${port}`);
  });