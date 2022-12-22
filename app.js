

function generate(){
    console.log("function initiated");
    let minNumber = parseInt(document.getElementById("min").value);
    let maxNumber = parseInt(document.getElementById("max").value);
    console.log(minNumber);
    console.log(maxNumber);

    const number = Math.floor(Math.random()*(maxNumber-minNumber+1))+minNumber;
    console.log(number);
    document.getElementById("result").innerHTML=number;
}
