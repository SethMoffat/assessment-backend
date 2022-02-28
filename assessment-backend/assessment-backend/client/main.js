document.getElementById("complimentButton").onclick = function () {
    console.log("hit")
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
          
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
          
        });
  };

  document.getElementById("questionButton").onclick = function () {
    axios.get("http://localhost:4000/api/question/")
        .then(function (response) {
          const data = response.data;
          alert(data);
          
        });
  };

  document.getElementById("memebutton").onclick = function(){
    axios.get("http://localhost:4000/api/meme/")
      .then(function(response) {
        console.log(response)
    const bing = document.createElement("img");
    // document.getElementById("meme").src = getmemes
    bing.setAttribute("src", response.data)
    const body = document.querySelector("body")
        body.appendChild(bing)
  })}

  // document.getElementById("memedelete").onclick = function(){
  //   axios.get("http://localhost:4000/api/meme/")
  //     .then(function(response) {
  //       console.log(response)
  
  //     const bod = document.getElementById(memebutton)
  //     bod.removeChild(bod)
  // })}
    // const bing = document.createElement("img");
    // // document.getElementById("meme").src = getmemes
    // bing.setAttribute("src", response.data)
    // const body = document.querySelector("body")
    //     body.removeChild(bing)

  // const createItem = (Item) => {
  //   const newItem = document.createElement("div");

  //   newItem.classitem
  // }

  // wishlistForm.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   const newItem = {
  //     name: itemName.value,
  //     priority:priority.value
  //   };

  //   axios.post("http://localhost:4000/api/wishlist" , newItem)
  //   .then((res) => {
  //     displayItems(res.data);
  //   })
  //   itemName.value = "";
  //   priority.selectedIndex = 0;
  // });

  // newItem.createItem = (item)

  // document.getElementById("gifButton").onclick = function(){
  //   axios.get("http://localhost:4000/api/gif/")
  //     .then(function(response) {
  //       console.log(response)
  //   const bong = document.createElement("div");
  //   // document.getElementById("meme").src = getmemes
  //   bing.setAttribute("src", response.data)
  //   const body = document.querySelector("body")
  //       body.appendChild(bong)
  // })}


  document.getElementById("profilebutton").onclick = function(){
    axios.get("http://localhost:4000/api/profile/")
      .then(function(response) {
        console.log(response)
    const bong = document.createElement("img");
    // document.getElementById("meme").src = getmemes
    bong.setAttribute("src", response.data)
    const body = document.querySelector("body")
        body.appendChild(bong)
  })}
 
  // document.getElementById("postButton").onclick = function(){
  //   axios.get("http://localhost:4000/api/post/")
  //     .then(function(response) {
  //       console.log(response)
  //       var t = document.getElementById("board").textContent;
  //       var y = document.createTextNode("This just got added");
        
  //       t.appendChild(y);


        