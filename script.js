function LavListen() {
    let dage = document.getElementById("inputTal").value;
    document.getElementById("1").innerHTML = "Undertøj: " + Math.ceil(dage * 1.1) + " stk";
    document.getElementById("2").innerHTML = "Bukser / Nederdele: " + Math.ceil(dage * 0.8) + " stk";
    document.getElementById("3").innerHTML = "Sko: " + Math.ceil(dage * 0.1) + " stk";
    document.getElementById("4").innerHTML = "Toiletsager";
    document.getElementById("5").innerHTML = "Jakke (Hvis nødvendigt): " + Math.ceil(dage * 0.1) + " stk";
    document.getElementById("6").innerHTML = "Regnjakke: " + Math.ceil(dage * 0.1) + " stk";
    document.getElementById("7").innerHTML = "Accesories: Solbriller, bælte osv.";
    document.getElementById("8").innerHTML = "Badetøj (Hvis nødvendigt): " + Math.ceil(dage * 0.2) + " stk";
    document.getElementById("9").innerHTML = "Sokker: " + Math.ceil(dage * 1.1) + " stk"
    document.getElementById("10").innerHTML = "T-Shirts / Toppe: " + Math.ceil(dage * 1.1) + " stk"
    document.getElementById("11").innerHTML = "Tykke trøjer (Hvis nødvendigt): " + Math.ceil(dage * 0.5) + " stk"
}