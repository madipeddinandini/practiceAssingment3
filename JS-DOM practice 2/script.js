//Task 1: Form Handling & Event Objects

const user = document.getElementById("user-form");

const display  = document.getElementById("display-name");

user.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username-input").value;

 display.textContent = username;

});

 
 //Task 2: Removing Elements (.remove())
 
 const button = document.querySelectorAll(".delete-btn");

button.forEach((button) => {
   button.addEventListener("click", 
    function (event) {
        event.target.parentElement.remove();
    }
   );
});

//Task 3: DOM Traversal

const container =  document.getElementById("container-box");
 console.log(container.children.length);

 const parentBtn = document.getElementById("color-parent-btn");
 parentBtn.addEventListener("click", function (e) {
    e.target.parentElement.style.backgroundColor = "lightblue"; 
 })
