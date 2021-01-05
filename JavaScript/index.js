function changeMode() {
    let x = document.querySelectorAll("#change *");
    let nextMode = document.getElementById("mode").innerHTML;
    console.log(nextMode);
    if (nextMode === "Dark Mode") {
        document.body.style.backgroundColor = "#2C4F64";
        for (var i = 0; i < x.length; i++) {
            x[i].style.color = "#E3EBF3";
        }
        document.getElementById("mode").innerHTML = "Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        for (var i = 0; i < x.length; i++) {
            x[i].style.color = "black";
        }
        document.getElementById("mode").innerHTML = "Dark Mode";
    }

}