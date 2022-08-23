function submit() {
    let cardNumber = document.getElementById("cardNumber").value;

    let dateOfExpiry = document.getElementById("dateOfExpiry").value;

    let cvv = document.getElementById("cvv").value;

    console.log(cardNumber, dateOfExpiry, cvv);

    if (cardNumber && dateOfExpiry && cvv) {
      setTimeout(() =>{
        alert("yr order is accepted")
      }, 0);
    
      setTimeout(() =>{
        alert("your order is being Prepared")
      }, 3000)
    
      setTimeout(() =>{
        alert("your order is Packed")
      }, 8000)
    
      setTimeout(() =>{
        alert("your order is out of delivery")
      }, 10000)
    
      setTimeout(() =>{
        alert("your order deliverd")
      }, 12000)
    }
  }




// function submit(){
//   setTimeout(() =>{
//     alert("yr order is accepted")
//   }, 0);

//   setTimeout(() =>{
//     alert("your order is being Prepared")
//   }, 3000)

//   setTimeout(() =>{
//     alert("your order is Packed")
//   }, 8000)

//   setTimeout(() =>{
//     alert("your order is out of delivery")
//   }, 10000)

//   setTimeout(() =>{
//     alert("your order deliverd")
//   }, 12000)
// }