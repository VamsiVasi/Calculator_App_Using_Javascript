function display(val) {
    document.getElementById("result").value += val;
}

function calculate() {
    try {
        let x = document.getElementById('result').value;
        let y = eval(x);
        document.getElementById("result").value = y;
    }
    catch {
        document.getElementById('result').value = 'Invalid Input'
    }
}

function clearInput() {
    document.getElementById("result").value = "";
}
