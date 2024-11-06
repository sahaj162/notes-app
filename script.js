const notesContainer = document.querySelector(".notes-container"); 
const createBtn = document.querySelector(".btn");

// function to save code locally
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    
    img.src = "images/delete.png";
    img.className = "delete-icon"; // Optional: add a class for easy styling if needed

    inputbox.appendChild(img); // Append the delete icon to the input box
    notesContainer.appendChild(inputbox); // Append the input box to the notes container
});
// FOR DELETING
// agr humara target wahi image jo humne create ki h to dlt kro
notesContainer.addEventListener("click",function(e){
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
   }
})