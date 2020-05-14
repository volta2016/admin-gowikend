const myRadios = document.getElementsByName('chekpage');
let setCheck;
let x = 0;
for(x = 0; x < myRadios.length; x++){

    myRadios[x].onclick = function(){
        if(setCheck != this){
             setCheck = this;
        } else {
            this.checked = false;
            setCheck = null;
    }
    };
}

//acordion
let acor = document.getElementsByClassName('acordion');
let i;
for(i = 0; i < acor.length; i++) {
    acor[i].onclick = function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }
}

//eliminar img
const grupo = [element,elementA,elementB,elementC,elementD]

function changeIcon(newDisplay) {
    let element = document.getElementById('cambio');
    element.style.visibility = newDisplay;
}

function changeIcon2(newDisplay) {
    let elementA = document.getElementById('cambio2');
    elementA.style.visibility = newDisplay;
}
function changeIcon3(newDisplay) {
    let elementB = document.getElementById('cambio3');
    elementB.style.visibility = newDisplay;
}
function changeIcon4(newDisplay) {
    let elementC = document.getElementById('cambio4');
    elementC.style.visibility = newDisplay;
}
function changeIcon5(newDisplay) {
    let elementD = document.getElementById('cambio5');
    elementD.style.visibility = newDisplay;
}


// function bigImg(e) {
//     e.style.display = "none";
// }

// function normalImg(e) {
//     e.style.display = "block";
// }

//selecionar img
// document.addEventListener('click', function(){
//     let element = document.getElementsByTagName('button');
//     element.classList.toggle("switch2");
// });

// function selectImg () {
//     let element = document.querySelectorAll('.switch');
//     element.classList.toggle('swich2') 
// }