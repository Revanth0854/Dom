

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

login.addEventListener("click", () => {
    mainForm.classList.toggle("newform")
})


// =============       NewsLetter      =============



let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let submit = document.querySelector(".submit");
let space = document.querySelector(".read");
let first = document.createElement("h3")
let second = document.createElement("h3")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    first.innerHTML = `${input1.value}`
    second.innerHTML = `${input2.value}`
    space.appendChild(first)
    space.appendChild(second)
})



// ==================== image- pop-up   =================


let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");

let pop1 = document.querySelector('.pop-up-image-1');
let pop2 = document.querySelector('.pop-up-image-2');
let pop3 = document.querySelector('.pop-up-image-3');
let pop4 = document.querySelector('.pop-up-image-4');
let pop5 = document.querySelector('.pop-up-image-5');
let pop6 = document.querySelector('.pop-up-image-6');


let closeBtn1 = document.querySelector('#close-pop1');
let closeBtn2 = document.querySelector('#close-pop2');
let closeBtn3 = document.querySelector('#close-pop3');
let closeBtn4 = document.querySelector('#close-pop4');
let closeBtn5 = document.querySelector('#close-pop5');
let closeBtn6 = document.querySelector('#close-pop6');

closeBtn1.addEventListener("click",()=>{
    pop1.style.display = "none";
})
closeBtn2.addEventListener("click",()=>{
    pop2.style.display = "none";
})
closeBtn3.addEventListener("click",()=>{
    pop3.style.display = "none";
})
closeBtn4.addEventListener("click",()=>{
    pop4.style.display = "none";
})
closeBtn5.addEventListener("click",()=>{
    pop5.style.display = "none";
})
closeBtn6.addEventListener("click",()=>{
    pop6.style.display = "none";
})

img1.addEventListener("click", () => {
    pop1.style.display = 'block';
})
img2.addEventListener("click", () => {
    pop2.style.display = 'block'
})
img3.addEventListener("click", () => {
    pop3.style.display = 'block'

})
img4.addEventListener("click", () => {
    pop4.style.display = 'block'

})
img5.addEventListener("click", () => {
    pop5.style.display = 'block'

})
img6.addEventListener("click", () => {
    pop6.style.display = 'block'

})