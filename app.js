

function generate(){
    console.log("function initiated");
    let minNumber = document.getElementById("min").value;
    let maxNumber = document.getElementById("max").value;
    console.log(minNumber);
    console.log(maxNumber);

    const number = Math.floor(Math.random()*(maxNumber-minNumber))+minNumber;
    console.log(number);
    document.getElementById("result").innerHTML=number;
}
