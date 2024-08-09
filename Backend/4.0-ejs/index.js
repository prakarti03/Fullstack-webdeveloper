import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date("August 4, 2024");
  let day = d.getDay();
  let type =  "a weekday";
  let adv = "it's time to work hard!";
    if(day === 0 || day === 6)
    {res.render("index.ejs",{daytype: 'a weekend',
      advice: "it's time to have fun! "
    })
  }
  res.render("index.ejs",{daytype: type,
    advice: adv
  })
   
});
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });