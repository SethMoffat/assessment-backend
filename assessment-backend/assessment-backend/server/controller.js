module.exports = {
  getCompliments: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "You will have good luck",
      "You will have bad luck",
      "You will get hit by a car tomorrow",
      "You will lose all your friends",
      "You will make more friends",
    ];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  getQuestion: (req, res) => {
    const questions = [
      "How old are you?",
      "What is your favorite color?",
      "Who is your best friend?",
    ];
    let randomIndex = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomIndex];
    res.status(200).send(randomQuestion);
  },

  getMeme: (req, res) => {
    const memes = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyAY5eVtL2GmVEx_8ok9lLXZtrKgq3oaemw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6YRH-wjItE1Jeh1rG5U_82n7XvwVAtmrdA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7_AhqbpyQBayNMtdbKoiFg1LOff7qTL7lw&usqp=CAU",
    ];
    let randomIndex = Math.floor(Math.random() * memes.length);
    let randomMeme = memes[randomIndex];
    res.status(200).send(randomMeme);
  },

  getMeme: (req, res) => {
    const memes = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyAY5eVtL2GmVEx_8ok9lLXZtrKgq3oaemw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6YRH-wjItE1Jeh1rG5U_82n7XvwVAtmrdA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7_AhqbpyQBayNMtdbKoiFg1LOff7qTL7lw&usqp=CAU",
    ];
    var randomIndex = Math.floor(Math.random() * memes.length);
    let randomMeme = memes[randomIndex];
    res.status(200).send(randomMeme);
  },

  getProfile: (req, res) => {
    const profiles = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vFjLGIeMa7k3BfbuIP5aRifVwDxT_3Lb9Q&usqp=CAU",
    ];
    let randomIndex = Math.floor(Math.random() * profiles.length);
    let random = profiles[randomIndex];
    res.status(200).send(random);
  },

  // deleteMeme: (req, res) => {

  //   let Index =
  //   let random = profiles[randomIndex];
  //   res.status(200).send(random);
  // },

  // deletePost: (req, res) => {
  //   let deleter = splice(0,2)
  //   res.status(200).send(deleter);
  // }
};

// "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif",
// "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcompote.slate.com%2Fimages%2F697b023b-64a5-49a0-8059-27b963453fb1.gif&imgrefurl=https%3A%2F%2Fslate.com%2Fculture%2F2019%2F05%2Fgifs-on-tv-shows-the-simpsons-homer-backing-into-bushes.html&tbnid=jgoueiaoilENiM&vet=12ahUKEwiLyf6_8aH2AhUfA50JHTckDFAQMygCegUIARCLAg..i&docid=jwzAhKRqXyW1xM&w=780&h=520&q=gif&hl=en&authuser=0&ved=2ahUKEwiLyf6_8aH2AhUfA50JHTckDFAQMygCegUIARCLAg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUy6pypYX119vf0fITK5gaeeODEKuo87_tyfJl2RQuN-3yQw_NbvjWBMeu6U0rEOziQI&usqp=CAU",
// I'm gonna undo this cooment later
// getGifs: (req, res) => {
//   const gifs = [
//   "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif",
//   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcompote.slate.com%2Fimages%2F697b023b-64a5-49a0-8059-27b963453fb1.gif&imgrefurl=https%3A%2F%2Fslate.com%2Fculture%2F2019%2F05%2Fgifs-on-tv-shows-the-simpsons-homer-backing-into-bushes.html&tbnid=jgoueiaoilENiM&vet=12ahUKEwiLyf6_8aH2AhUfA50JHTckDFAQMygCegUIARCLAg..i&docid=jwzAhKRqXyW1xM&w=780&h=520&q=gif&hl=en&authuser=0&ved=2ahUKEwiLyf6_8aH2AhUfA50JHTckDFAQMygCegUIARCLAg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUy6pypYX119vf0fITK5gaeeODEKuo87_tyfJl2RQuN-3yQw_NbvjWBMeu6U0rEOziQI&usqp=CAU",

//   ];
//   let randomIndex = Math.floor(Math.random() * gifs.length);
//   let randomGif = gifs[randomIndex];
//   res.status(200).send(randomGif);
// },

//     getPost: (req, res) => {
//       const posts = [
//       "I love chicken nuggets",
//       "I am bad at math",
//       "I have a pet hamster",
//       "I love christmas time"
//       ];
//       let randomIndex = Math.floor(Math.random() * posts.length);
//       let randomMeme = posts[randomIndex];
//       res.status(200).send(randomMeme);
//     },
