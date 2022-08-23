append()


function replace(){
  location.replace('index.html');
}


function append(){
    console.log("hii")
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let all_products = document.getElementById("all_products");
    all_products.innerHTML = null;

  data.forEach(function (el, index) {
    let div = document.createElement("div")
    div.setAttribute('id', 'contaner')
    let img = document.createElement("img")
    img.src = el.image;
    let h3 = document.createElement("h3");
    h3.innerText = el.type
    let p = document.createElement("p");
    p.innerText = el.desc
    let h4 = document.createElement("h4");
    h4.innerText = el.price
    let btn = document.createElement("button");
    btn.innerText = "Remove"
    btn.setAttribute('id', 'remove_products')

      btn.onclick = () => {
        remove(index);
      }
    div.append(img, h3, p, h4, btn)
    all_products.appendChild(div)

  });
    
 
}


function remove(id){
  let data = JSON.parse(localStorage.getItem("products")) || [];
  
  let newData = data.filter((el, i) => {
    return i !== id
  })

  localStorage.setItem("products", JSON.stringify(newData))
  append();
  console.log(newData)
}

