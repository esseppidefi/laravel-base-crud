require("./bootstrap");
const form = document.querySelector("#deleteForm");

document.querySelectorAll(".deleteButton").forEach((button) => {
    button.addEventListener("click", function () {
        form.action = form.dataset.base + "/" + this.dataset.id;
    });
});
console.log(form);
console.log("click");
// const button = document.querySelectorAll(".deleteButton");
// const form = document.querySelector(".deleteForm");

// button.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         form.action = this.dataset.base + "/" + this.dataset.id;
//     });
// });
