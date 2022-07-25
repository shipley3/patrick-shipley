console.log("hi");

document.getElementById("copy-email").addEventListener("click", copyFunc);

function copyFunc(elem){
    console.log("hi2");

    var copyText = "ptrck.ship@gmail.com";

    navigator.clipboard.writeText(copyText);

    alert("Copied!");
};