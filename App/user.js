document.querySelector("show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
console.log(document.querySelector("#show-login"));
console.log(document.querySelector(".popup"));
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
