// function ad(elementID){
//     const newSection = document.createElement('div');//creating an element
//     newSection.innerHTML = 
//     ` <div class="flex justify-between m-2 font-bold">
//     <span class="spano font-extrabold"></span>
//     <div>Economy</div>
//     <div>550 Tk</div>
//     </div> `; // adding innerHTML to the created element
//     newSection.classList.add(elementID);
//     document.getElementById('append').appendChild(newSection);
//     let b = document.getElementsByClassName(elementID)[0];
//     b.getElementsByClassName('spano')[0].innerText = elementID
    
// }
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

