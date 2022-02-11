const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",

  ];
  const fortunes = ["You will havegood luck", "You will have bad luck", "You will get hit by a car tomorrow", "You will lose all your friends", "You will make more friends"]
  
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomfortune = fortunes[randomIndex];
  res.status(200).send(randomfortune);

  res.status(200).send(randomCompliment);
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
