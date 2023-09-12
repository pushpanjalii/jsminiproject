let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    console.log("task added");
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deltBtn = document.createElement("button");
    deltBtn.innerText = "delete";
    deltBtn.classList.add("delete");
    item.appendChild(deltBtn);

    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName=="BUTTON");
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
})

// let deltBtns = document.querySelectorAll(".delete");
// for (deltBtn of deltBtns) {
// deltBtn.addEventListener("click", function() {
//    let par = this.parentElement;
//    console.log(par);
//    par.remove();

// })
// }