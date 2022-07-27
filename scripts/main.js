console.log("js ready");

document.getElementById("copy-email").addEventListener("click", copyFunc);

document.getElementById("copy-email").addEventListener("mousedown", changeIconDown);

document.getElementById("copy-email").addEventListener("mouseup", changeIconUp);

function copyFunc(){


    var copyText = "ptrck.ship@gmail.com";

    navigator.clipboard.writeText(copyText);

    console.log("copied!");

};

function changeIconDown(){
    document.getElementById("copy-sticky").className = "bi bi-sticky-fill";
}

function changeIconUp(){
    setTimeout(function(){
        document.getElementById("copy-sticky").className = "bi bi-sticky";
    }, 300);
}