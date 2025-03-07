// Select input and output elements
const elements = {
    inputVar: document.getElementById("inputVar"),
    inputConst: document.getElementById("inputConst"),
    inputLet: document.getElementById("inputLet"),
    outputVar: document.getElementById("outputVar"),
    outputConst: document.getElementById("outputConst"),
    outputLet: document.getElementById("outputLet"),
    button: document.getElementById("updateBtn"),
    button2: document.getElementById("updateBtn2"),
    
    // Grouping input and output variables
    inputA: [document.getElementById("inputVarA1"), document.getElementById("inputVarA2")],
    inputB: [document.getElementById("inputVarB1"), document.getElementById("inputVarB2")],
    inputC: [document.getElementById("inputVarC1"), document.getElementById("inputVarC2")],
    inputD: [document.getElementById("inputVarD1"), document.getElementById("inputVarD2")],

    outputA: document.getElementById("outputVarA"),
    outputB: document.getElementById("outputVarB"),
    outputC: document.getElementById("outputVarC"),
    outputD: document.getElementById("outputVarD"),

    inputE: document.getElementById("inputVarE1"),
    outputE: document.getElementById("outputVarE"),
    outputF: document.getElementById("outputVarF"),
    outputG: document.getElementById("outputVarG"),

    inputH: [document.getElementById("inputVarH1"), document.getElementById("inputVarH2")],
    outputH: document.getElementById("outputVarH"),

    inputI: [document.getElementById("inputVarI1"), document.getElementById("inputVarI2")],
    outputI: document.getElementById("outputVarI"),

    checkboxJ: document.getElementById("checkboxJ"),
    outputJ: document.getElementById("outputVarJ"),

    inputK: document.getElementById("inputVarK1"),
    outputK: document.getElementById("outputVarK"),

    sizeDropdown: document.getElementById("sizeDropdown"),
    shirtQuantity: document.getElementById("shirtQuantity"),
    outputL: document.getElementById("outputVarL")
};

// Update text based on input fields
elements.button.addEventListener("click", () => {
    elements.outputVar.textContent = elements.inputVar.value;
    elements.outputConst.textContent = elements.inputConst.value;
    elements.outputLet.textContent = elements.inputLet.value;
});

// Add event listener for button2
elements.button2.addEventListener("click", () => {
    updateBasicOperations();
    updateTextProcessing();
    updateCheckbox();
    updateSizeCategory();
    updateShirtPrice();
});

// Function for basic operations
function updateBasicOperations() {
    elements.outputA.textContent = elements.inputA[0].value + elements.inputA[1].value;
    elements.outputB.textContent = Number(elements.inputB[0].value) + Number(elements.inputB[1].value);
    elements.outputC.textContent = parseInt(elements.inputC[0].value) + parseInt(elements.inputC[1].value);
    elements.outputD.textContent = parseFloat(elements.inputD[0].value) + parseFloat(elements.inputD[1].value);
}

// Function for text processing
function updateTextProcessing() {
    const words = elements.inputE.value.trim().split(" ");
    
    elements.outputE.textContent = words[0] || "";
    elements.outputF.textContent = words[1] || "";

    elements.outputG.textContent = words.length ? words[words.length - 1] : "";

    const replacedWords = [...words];
    if (words.length) replacedWords[0] = elements.inputH[1].value;
    
    elements.outputH.textContent = replacedWords.join(" ");
}

// Function to check checkbox state
function updateCheckbox() {
    elements.outputJ.textContent = elements.checkboxJ.checked 
        ? "The checkbox is enabled." 
        : "The checkbox is disabled.";
}

// Function to determine size category
function updateSizeCategory() {
    const size = Number(elements.inputK.value);
    
    elements.outputK.textContent = size < 0 ? "Negative"
        : size < 5 ? "Small"
        : size < 10 ? "Medium"
        : size < 20 ? "Large"
        : "Extra Large";
}

// Function to calculate price
function updateShirtPrice() {
    const prices = {
        "Small": 2,
        "Medium": 3,
        "Large": 4,
        "Extra Large": 5
    };

    const size = elements.sizeDropdown.value;
    const quantity = Number(elements.shirtQuantity.value);
    
    elements.outputL.textContent = `Total Price: $${(prices[size] || 0) * quantity}`;
}
