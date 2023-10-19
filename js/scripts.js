// funciton here to determine char strength
function strength(armor, weapon) {
    let result;
    if (armor === "cloth") {
        result = "Your strength level is 1."
    } else if (armor === "leather") {
        result = "Your strength level is 3."
    } else if (armor === "platemail") {
        result = "You are super strong!"
    }
    return result
}

//event listener
function selectChar(event) {
    console.log(event);
    console.log(event.target);
    event.preventDefault();
    const name = document.querySelector("input#name").value;
    console.log(name);
    const armor = event.target.armor.value;
    console.log(armor);
    const weapon = document.querySelector("option").value;
    console.log(weapon);
    let result = strength(armor, weapon);

    document.getElementById("output").innerText = result.toString();
    

}

window.addEventListener("load",function() {
    const form = this.document.getElementById("charAttributes");
    form.addEventListener("submit", selectChar);
    
});


