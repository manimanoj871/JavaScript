var popupover=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box")
var addpopupbtn=document.getElementById("add-popup-btn")
addpopupbtn.addEventListener("click",function(){
    popupover.style.display="block"
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancel-popup")
 cancel.addEventListener("click",function(event){
    event.preventDefault();
     popupover.style.display="none"
    popupbox.style.display="none"
 })
 var cont=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitle=document.getElementById("Book-Title-in")
 var bookauther=document.getElementById("Book-Author-in");
 var bookdes=document.getElementById("Book-Des_in")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_cont")
    div.innerHTML=`<h2>${booktitle.value}</h2>
          <h5>${bookauther.value}</h5>
          <p>${bookdes.value}</p>
          <button onclick="deletebook(event)">Delete</button>`
          cont.append(div)
           popupover.style.display="none"
    popupbox.style.display="none"
          
 })
 function deletebook(event)
 {
    event.target.parentElement.remove();
 }