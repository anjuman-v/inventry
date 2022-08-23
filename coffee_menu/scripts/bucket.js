// On clicking remove button the item should be removed from DOM as well as localstorage.

totalPrices();
append();

const totalPrices = () =>{
    let total = 0;
    let items = JSON.parse(localStorage.getItem("coffee"));
    
    for(var i = 0; i < items.length; i++){
        total += Number(items[i].price);
    }

    let h2 = document.getElementById("total_amount");
    h2.innerText = total;

}

function append(){
    let data = JSON.parse(localStorage.getItem("coffee"));
    let container = document.getElementById("bucket");
    container.innerHTML = null;
    data.forEach((el, index) => {
      let div = document.createComment("div")
     // div.setAttribute("class", "coffe");
      
      let img = document.createElement("div");
      img.src = el.image;
      let title = document.createElement("p");
      package.innerText = el.title;

      let remove_btn = document.createElement("button");
      remove_btn.setAttribute("id", "remove_btn");
      remove_btn.onclick = () => {
        remove(index);
      }
      div.append(img, title, price, remove_btn)
      container.appendChild(div);

    });

}

function remove(id){
    let data = JSON.parse(localStorage.getItem("coffee"));
    data = data.filter((el, index) => {
        return index !== id;
    })

    localStorage.setItem("coffee", JSON.stringify(data))
    append();
    totalPrices();
}