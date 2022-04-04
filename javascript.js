let input = document.getElementById("input");

let add = document.getElementById("addbtn");

let ul = document.querySelector("ul");

let errorp = document.getElementById("error");
let delAll = document.getElementById("delAll");




input.addEventListener('keydown', function(event) {
    if (event.key == "Enter") {


        let inputvalue = input.value;
        let li = document.createElement("li");
        let litext = document.createTextNode(inputvalue);
        let lip = document.createElement("p");
        let lidel = document.createElement("button");
        let lideltext = document.createTextNode("Delete")


        if (input.value != "") {
            errorp.innerHTML = "";
            ul.appendChild(li);
            lip.appendChild(litext)
            li.appendChild(lip);
            lidel.appendChild(lideltext);
            li.appendChild(lidel);

            input.value = "";
        } else {
            errorp.innerHTML = "* Please Enter Something In Input";
        }


        lidel.addEventListener("click", function() {
            console.log("deleted");
            li.removeChild(lip);
            li.removeChild(lidel);
            li.style.display = "none";
        })
    }

});




add.addEventListener("click", function() {


    let inputvalue = input.value;
    let li = document.createElement("li");
    let litext = document.createTextNode(inputvalue);
    let lip = document.createElement("p");
    let lidel = document.createElement("button");
    let lideltext = document.createTextNode("Delete")


    if (input.value != "") {
        errorp.innerHTML = "";
        ul.appendChild(li);
        lip.appendChild(litext)
        li.appendChild(lip);
        lidel.appendChild(lideltext);
        li.appendChild(lidel);

        input.value = "";
    } else {
        errorp.innerHTML = "* Please Enter Something In Input";
    }


    lidel.addEventListener("click", function() {
        console.log("deleted");
        li.removeChild(lip);
        li.removeChild(lidel);
        li.style.display = "none";
    })


});


delAll.addEventListener("click", function() {
    ul.style.display = "none";
})