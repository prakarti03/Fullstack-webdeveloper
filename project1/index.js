import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
      // Making multiple API requests
      const responses = await Promise.all([
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random"),
        axios.get("https://dog.ceo/api/breeds/image/random")
      ]);
  
      // Extracting the image URLs
    //   const images = responses.map(response => response.data.message);
    const images = [];
    for (const response of responses) {
        images.push(response.data.message);
    }
    // console.log(images);
  
      // Rendering the ejs template with the images
      res.render("index.ejs", {
        images
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
app.listen(port,() => {
    console.log(`Server running on ${port}`);
});
