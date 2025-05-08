//your JS code here. If required.
function clicked() {
    let p = document.getElementById("status");
    let h = document.createElement("h1");
    h.innerText = "Entered Metaverse";
    p.parentNode.replaceChild(h, p);
}