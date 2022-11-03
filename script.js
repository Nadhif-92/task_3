const teks = document.getElementById("judul");
teks.innerText = "DOM Manipulation";
function Click(){
    const elemen = document.createElement("a");
    const elemenA = document.createTextNode("HELLO WORLD!!!")

    elemen.appendChild(elemenA);

    const button = document.getElementById("body");
    button.appendChild(elemen);
}
