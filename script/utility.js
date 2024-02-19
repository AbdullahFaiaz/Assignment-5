
function adrem(elementID){
    const parentElement = document.getElementById("append");

    const chec = document.getElementById(elementID+'P');

    if(chec){
        chec.remove();
    }
    else{
        const newParent = document.createElement("div");
        newParent.id = elementID+'P';
        parentElement.appendChild(newParent);
        newParent.classList.add('flex','justify-between');

        const newElement = document.createElement("div");
        newElement.id = elementID+'a';
        newElement.innerText = elementID;
        newParent.appendChild(newElement);

        const newElementb = document.createElement("div");
        newElementb.id = elementID+'b';
        newElementb.innerText = 'Economy';
        newParent.appendChild(newElementb);

        const newElementc = document.createElement("div");
        newElementc.id = elementID+'c';
        newElementc.innerText = 550;
        newParent.appendChild(newElementc);
    }
}






function addColor(elementID) {
    const element = document.getElementById(elementID);
    element.style.backgroundColor = 'rgb(29, 209, 0)';
}

function removeColor(elementID) {
    const element = document.getElementById(elementID);
    element.style.backgroundColor = 'rgb(247, 248, 248)';
}

function increase(elementID,increment){
    let element = document.getElementById(elementID);
    let elementText = element.innerText;
    let number = parseInt(elementText);
    const result = number + increment;
    element.innerText = result;
}
function decrease(elementID,decrement){
    let element = document.getElementById(elementID);
    let elementText = element.innerText;
    let number = parseInt(elementText);
    const result = number - decrement;
    element.innerText = result;
}

