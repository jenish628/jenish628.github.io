document.addEventListener("DOMContentLoaded",function(){
    setValue();             // 
});
function add(){
   
    let task = document.getElementById("tasks").value; // Getting the value
    document.getElementById("tasks").value="";  // Resetting the value to clear
    localStorage.setItem("tasks",localStorage.getItem("tasks")?localStorage.getItem("tasks")+"\n"+ task:task); //Setting to Local Storage
    setValue(); // Refresh
}

function clearItems(){
   
    localStorage.removeItem("tasks");  // Removing all the items
    setValue();                        // Refresh
}
function setValue(){
    document.getElementById("description").value=localStorage.getItem("tasks");  // Not reactive so updating based on local data
}