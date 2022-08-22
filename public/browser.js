document.addEventListener("click", (event)=>{
   let targetId = event.target.getAttribute('data-id');
   //Delete feature
   if(event.target.classList.contains("delete-me")){
      if(confirm("Do you really want to delete this item?")){
         axios.post('/delete-item', {id: targetId}).then(()=>{
            event.target.parentElement.parentElement.remove();
           }).catch(()=>{
            console.log("Please try again later")
           })
      }
   }
   
   //Update feature
   if(event.target.classList.contains("edit-me")){
     let userInput = prompt("Enter derired new item", event.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
     if(userInput){
      axios.post('/update-item', {text: userInput, id: targetId}).then(()=>{
         event.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        }).catch(()=>{
         console.log("Please try again later")
        })
     }
   }
})