var inputVar = document.getElementById("inputVar");
const inputConst = document.getElementById("inputConst");
let inputLet = document.getElementById("inputLet");

var outputVar = document.getElementById("outputVar");
const outputConst = document.getElementById("outputConst");
let outputLet = document.getElementById("outputLet");

const button = document.getElementById("updateBtn");

button.addEventListener("click", () => {
    outputVar.textContent = inputVar.value;
    outputConst.textContent = inputConst.value;
    outputLet.textContent = inputLet.value;
});


var inputVarA1 = document.getElementById("inputVarA1");
var inputVarA2 = document.getElementById("inputVarA2");

var inputVarB1 = document.getElementById("inputVarB1");
var inputVarB2 = document.getElementById("inputVarB2");

var inputVarC1 = document.getElementById("inputVarC1");
var inputVarC2 = document.getElementById("inputVarC2");

var inputVarD1 = document.getElementById("inputVarD1");
var inputVarD2 = document.getElementById("inputVarD2");

var inputVarE1 = document.getElementById("inputVarE1");
var inputVarF1 = document.getElementById("inputVarF1");
var inputVarG1 = document.getElementById("inputVarG1");

var inputVarH1 = document.getElementById("inputVarH1");
var inputVarH2 = document.getElementById("inputVarH2");

var outputVarA = document.getElementById("outputVarA");
var outputVarB = document.getElementById("outputVarB");
var outputVarC = document.getElementById("outputVarC");
var outputVarD = document.getElementById("outputVarD");

var outputVarE = document.getElementById("outputVarE");
var outputVarF = document.getElementById("outputVarF");
var outputVarG = document.getElementById("outputVarG");
var outputVarH = document.getElementById("outputVarH");


const button2 = document.getElementById("updateBtn2");


var inputVarI1 = document.getElementById("inputVarI1"); 
var inputVarI2 = document.getElementById("inputVarI2"); 
var outputVarI = document.getElementById("outputVarI");

var checkboxJ = document.getElementById("checkboxJ"); 
var outputVarJ = document.getElementById("outputVarJ");

var inputVarK1 = document.getElementById("inputVarK1"); 
var outputVarK = document.getElementById("outputVarK");

var sizeDropdown = document.getElementById("sizeDropdown"); 
var shirtQuantity = document.getElementById("shirtQuantity");
var outputVarL = document.getElementById("outputVarL");

button2.addEventListener("click", () => {
    outputVarA.textContent = inputVarA1.value + inputVarA2.value;
    outputVarB.textContent = Number(inputVarB1.value) + Number(inputVarB2.value);
    outputVarC.textContent = parseInt(inputVarC1.value) + parseInt(inputVarC2.value);
    outputVarD.textContent = parseFloat(inputVarD1.value) + parseFloat(inputVarD2.value);

    
    outputVarE.textContent = inputVarE1.value.trim().split(" ")[0];
    outputVarF.textContent = inputVarE1.value.trim().split(" ")[1];

    var outputVarGLast = inputVarE1.value.trim().split(" ");
    outputVarG.textContent = outputVarGLast[outputVarGLast.length -1];

    var outputVarHShift = inputVarH1.value.trim().split(" ");
    outputVarHShift.shift();
    outputVarHShift.unshift(inputVarH2.value);
    outputVarH.textContent = outputVarHShift;

    
    function sampleCompute(a, b) {
        outputVarI.textContent = a + b;
    }
    sampleCompute(Number(inputVarI1.value),Number(inputVarI2.value));

    function sampleIsTrue(checkboxTrue){
        if(checkboxTrue){
            outputVarJ.textContent = 'The checkbox is enabled.';
        }else{
            outputVarJ.textContent = 'The checkbox is disabled.';
        }
    }
    sampleIsTrue(checkboxJ.checked);

    function getSize(thisSize){
        if(thisSize < 0){
            outputVarK.textContent = 'Negative';
        }else if(thisSize < 5){
            outputVarK.textContent = 'Small';
        }else if(thisSize < 10){
            outputVarK.textContent = 'Medium';
        }else if(thisSize < 20){
            outputVarK.textContent = 'Large';
        }else {
            outputVarK.textContent = 'Extra Large';
        }
    }
    getSize(Number(inputVarK1.value));

    function getPrice(shirtSize, shirtQty){
        let price;

    switch (shirtSize) {
        case 'Small':
            price = 2;
            break;
        case 'Medium':
            price = 3;
            break;
        case 'Large':
            price = 4;
            break;
        case 'Extra Large':
            price = 5;
            break;
        default:
            price = 0; 
    }

    let totalPrice = price * shirtQty;
    outputVarL.textContent = `Total Price: $${totalPrice}`;
    }
    getPrice(sizeDropdown.value,Number(shirtQuantity.value));

});