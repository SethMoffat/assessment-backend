const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const ctrl = require("./controller.js")
app.get("/api/compliment", ctrl.getCompliments);
app.get("/api/fortune", ctrl.getFortune);
app.get("/api/meme" , ctrl.getMeme);
app.get("/api/profile", ctrl.getProfile)
app.get("/api/question", ctrl.getQuestion)
// app.get("/api/question", ctrl.getQuestion)
// app.delete("/api/deleteMeme", ctrl.delete)
// app.delete("/api/meme" , ctrl.deleteMeme);
// app.get("/api/post" , ctrl.getPost)
// app.get("/api/removememe", ctrl.dropMeme );
// app.get("/api/gif", ctrl.getGif);
// app.post('/api/wishlist', wishlistCtrl.addItem)
// app.delete('/api/wishlist/:id', wishlistCtrl.deleteItem)
 
app.listen(4000, () => console.log("Server running on 4000"));
