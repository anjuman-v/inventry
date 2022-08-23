// Add the coffee to local storage with key "coffee"
   
// async function showMenu(){

//   fetch("https://masai-api.herokuapp.com/coffee/menu")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
      
// }

// showMenu()

// let url = "https://masai-api.herokuapp.com/coffee/menu";

// getData(url)
// async function getData(url){

//     let res = await fetch(url);

//     let data = await res.json();

   
//     console.log(data)

//     showData(data)

// }



let items = [];

showItem()

function showItem(){
  fetch("https://masai-api.herokuapp.com/coffee/menu")
  .then((res) =>{
    return res.json();
  })
  .then((res) =>{
    console.log(res);
    items = res.menu.data;
    append(res.menu.data) 
  })
}


function append(data){
  let container = document.getElementById("menu");

data.forEach(function (el, index) {
  let div = document.createElement("div")
  let img = document.createElement("img")
  img.src = el.image;
  let h3 = document.createElement("h3");
  h3.innerText = el.title
  let p = document.createElement("p");
  p.innerText = el.description
  let h4 = document.createElement("h4");
  h4.innerText = el.price
  let btn = document.createElement("button");
  btn.innerText = "add to cart"
  btn.onclick = () => {
    addToCart(index)
  }
  

  div.append(img, h3, p, h4,btn)
  container.append(div)

});
  
}

function addToCart(id){
  let count = JSON.parse(localStorage.getItem("coffee"));
  // let c = document.getElementById("coffee_count")
  // c.innerText = count.length + 1;
  let data = JSON.parse(localStorage.getItem("coffee")) || []

  data.push(items[id]);

  localStorage.setItem("coffee", JSON.stringify(data))

  console.log(items)
}






