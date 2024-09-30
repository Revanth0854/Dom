

// ==============     HAM BURGER      =========

let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let button = document.querySelector(".btn");

burger.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    // navLinks.style.display="flex"
});

// ============     ACCORDIAN       ==============

let ques = document.querySelectorAll(".accordian");

ques.forEach((que) => {
    que.addEventListener("click",()=>{
        que.classList.toggle("active");
        // if (que.classList[0] = )
    });
    
});

// ============     Load More       ==================

let loadMore = document.querySelector(".Loadmore");
let row = document.querySelector(".row-2");

loadMore.addEventListener("click",()=>{
    row.classList.toggle("newRow");
    if(loadMore.innerHTML == "See more"){
        loadMore.innerHTML = "See less";
    }
    else{
        loadMore.innerHTML = "See more"
    }
})

// ==============       Login-Form      ===========

let login = document.querySelector(".login");

let mainForm = document.querySelector(".mainForm");

login.addEventListener("click",()=>{
    mainForm.classList.toggle("newform")
})


// =============       NewsLetter      =============



let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let submit = document.querySelector(".submit");
let space = document.querySelector(".read");
let first = document.createElement("h3")
let second = document.createElement("h3")
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    first.innerHTML = `${input1.value}`
    second.innerHTML = `${input2.value}`
    space.appendChild(first)
    space.appendChild(second)
})
