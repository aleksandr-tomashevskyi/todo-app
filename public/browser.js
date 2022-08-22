document.addEventListener("click", (event)=>{
   if(event.target.classList.contains("edit-me")){
     let userInput = prompt("Enter derired new item", event.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
     let targetId = event.target.getAttribute('data-id');
     if(userInput){
      axios.post('/update-item', {text: userInput, id: targetId}).then(()=>{
         event.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        }).catch(()=>{
         console.log("Please try again later")
        })
     }
   }
})