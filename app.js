

// ==============     HAM BURGER      =========

let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let button = document.querySelector(".btn");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    // navLinks.style.display="flex"
});

// ============     ACCORDIAN       ==============

let ques = document.querySelectorAll(".accordian");

ques.forEach((que) => {
    que.addEventListener("click", () => {
        que.classList.toggle("active");
        // if (que.classList[0] = )
    });

});

// ============     Load More       ==================

let loadMore = document.querySelector(".Loadmore");
let row = document.querySelector(".row-2");

loadMore.addEventListener("click", () => {
    row.classList.toggle("newRow");
    if (loadMore.innerHTML == "See more") {
        loadMore.innerHTML = "See less";
    }
    else {
        loadMore.innerHTML = "See more"
    }
})

// ==============       Login-Form      ===========

let login = document.querySelector(".login");

let mainForm = document.querySelector(".mainForm");

let close = document.querySelector(".mainForm h2");

login.addEventListener("click", () => {
    mainForm.classList.add("newform")
})

close.addEventListener("click",()=>{
    mainForm.classList.remove("newform");
})

// =============       NewsLetter      =============



let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let submit = document.querySelector("#submit");
let space = document.querySelector(".read");
let first = document.createElement("h3")

let second = document.createElement("h3")
submit.addEventListener("click", () => {
    first.innerHTML = `${input1.value}`
    second.innerHTML = `${input2.value}`
    space.appendChild(first)
    space.appendChild(second)
})




// ==================== image- pop-up   =================



let images = document.querySelectorAll(".image img");
let popup = document.querySelector(".popup");
let img = document.createElement('img');
let cross = document.querySelector(".popup h1");
popup.appendChild(img);
images.forEach((item) => {
    item.addEventListener("click", () => {
        popup.style.display="block";
        let attribute = item.getAttribute("src");
        img.setAttribute("src", attribute);
        console.log(attribute)
    })
})

cross.addEventListener("click",()=>{
    popup.style.display="none";
})


