function onLoad() {
    console.log(document.getElementById("test"));
    document.getElementById("test").onkeydown = function(event) {
                console.log("Code: "+event.keyCode+"; Key: "+String.fromCharCode(event.keyCode));
        }
}