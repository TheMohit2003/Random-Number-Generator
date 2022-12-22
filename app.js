

function generate(){
    console.log("function initiated");
    let minNumber = document.getElementById("min").value;
    let maxNumber = document.getElementById("max").value;
    console.log(minNumber);
    console.log(maxNumber);

    if (minNumber > maxNumber) {
        [minNumber, maxNumber] = [maxNumber, minNumber];
    }

    const number = Math.floor(Math.random()*(maxNumber-minNumber+1)) + minNumber;
    console.log(number);
    document.getElementById("result").innerHTML=number;
}
